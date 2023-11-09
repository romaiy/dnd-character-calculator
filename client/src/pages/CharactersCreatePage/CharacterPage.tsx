import { useNavigate, useParams } from "react-router-dom";
import Wrapper from "../../components/Wrappers/Wrapper";
import { FormProvider, useForm } from "react-hook-form";
import CharactersCreateFields from "./components/CharactersCreateFields";
import $api from "../../http";
import CharacterImage from "./components/CharacterImage";
import { useContext, useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../../main";
import { ICharacter } from "../../models/ICharacter";
import CustomTitle from "./components/CustomTitle";
import CharacterInfo from "./components/CharacterInfo";

const CharacterPage = () => {
  const {id} = useParams();
  const {ChStore} = useContext(Context);
  const navigate = useNavigate();
  const methods = useForm({mode: 'onSubmit'});

  const [character, setCharacter] = useState<ICharacter>();

  const handleCreate = methods.handleSubmit((formData) => {
    $api.post('/character', formData).then(response => {
      setCharacter(response.data);
      navigate(`/characters/${response.data.id}`);
    });
  });

  useEffect(() => {
    if (id && id !== 'new') {
      ChStore.getOneCharacter(+id);
    }
  }, []);

  useEffect(() => {
    setCharacter(ChStore.character);
  }, [ChStore.character]);

  return (
    <FormProvider {...methods}>
      <Wrapper CustomTitle={() => CustomTitle({id: id!, name: character?.name})}>
        {id === 'new' ? ( 
          <CharactersCreateFields handleCreate={handleCreate}/>
        ) : (
          <CharacterInfo/>
        )}
        <CharacterImage id={id !== 'new' ? character?.race_id : undefined}/>
      </Wrapper>
    </FormProvider>
  );
}

export default observer(CharacterPage);

