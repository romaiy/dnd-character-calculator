import { useContext, useEffect, useState } from "react";
import List from "../../components/List/List";
import Wrapper from "../../components/Wrappers/Wrapper";
import { Context } from "../../main";
import { observer } from "mobx-react-lite";
import CharactersServices from "../../services/CharactersServices";

interface ListDataProps {
  id: number,
  name: string,
  description: string
}

const CharactersPage = () => {
  const {ChStore} = useContext(Context);
  const [listData, setListData] = useState<ListDataProps[]>([]);

  const getCharacters = () => {
    ChStore.getCharacters()
    .then(response => {
      const data = response?.data?.map(item => {
        return {id: item.id, name: item.name, 
          description: `${item.subrace_name ? 
            item.subrace_name  : item.race_name}, ${item.class_name}`}
      });
      setListData(data!);
    });
  }

  const handleDelete = async (e: any, id: number) => {
    e.stopPropagation()
    await CharactersServices.deleteCharacter(id);
    getCharacters();
  }

  useEffect(() => {
    getCharacters();
  }, []);

  return(
    <Wrapper>
      <List handleDelete={handleDelete} listData={listData} type="character"/>
      <></>
    </Wrapper>
  );
}

export default observer(CharactersPage);