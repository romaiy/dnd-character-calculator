import { ActionIcon, Flex, Title } from "@mantine/core";
import { IconChevronLeft } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";

interface props {
  id: string,
  name: string | undefined
}

const CustomTitle = ({id, name}: props) => {
  const navigate = useNavigate();

  return (
    <Flex gap={16} align={'center'}>
      <ActionIcon radius={'1rem'} style={{background: 'white'}} w={48} h={48} onClick={() => navigate(-1)}>
        <IconChevronLeft color="#1C1C1C" stroke={1.5} width={20} height={20}/>
      </ActionIcon>
      <Title size={'h1'}>{id === 'new' ? 'Создание персонажа' : name}</Title>
    </Flex>
  )
}

export default CustomTitle;