import { useNavigate, useParams } from "react-router-dom";
import Wrapper from "../../components/Wrappers/Wrapper";
import { ActionIcon, Flex, Title } from "@mantine/core";
import { IconChevronLeft } from "@tabler/icons-react";
import { useForm } from "react-hook-form";
import CharactersCreateFields from "./components/CharactersCreateFields";

const CharactersCreatePage = () => {
  const {id} = useParams();
  const navigate = useNavigate();
  const {control} = useForm({mode: 'onSubmit'});

  const CustomTitle = () => {
    return (
      <Flex gap={16} align={'center'}>
        <ActionIcon radius={'1rem'} style={{background: 'white'}} w={48} h={48} onClick={() => navigate(-1)}>
          <IconChevronLeft color="#1C1C1C" stroke={1.5} width={20} height={20}/>
        </ActionIcon>
        <Title size={'h1'}>{id === 'new' ? 'Создание персонажа' : 'name'}</Title>
      </Flex>
    )
  }

  return (
    <Wrapper CustomTitle={CustomTitle}>
      <CharactersCreateFields
        control={control}
      />
      <></>
    </Wrapper>
  );
}

export default CharactersCreatePage;

