import { Stack, Title, Text, createStyles, Flex } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { CHARACTERS_ROUTE, CLASSES_ROUTE, RACE_ROUTE } from "../../utils/const";
import { IconTrash } from "@tabler/icons-react";
import CharactersServices from "../../services/CharactersServices";
import { useContext } from "react";
import { Context } from "../../main";

interface ItemProps {
  id: number,
  name: string,
  description: string,
  type: string
}

const useStyles = createStyles((theme) => ({
  item: {
    background: '#FFFF',
    borderRadius: '16px',
    color: theme.colors.gray[8],
    transition: 'all 0.2s',
    cursor: 'pointer',
    '&:hover': {
      background: theme.colors.indigo[7],
      color: 'white'
    }
  }
}))

const Item = ({name, description, id, type}: ItemProps) => {
  const { classes } = useStyles();
  const navigate = useNavigate();
  const {ChStore} = useContext(Context);

  const ItemTypes: {[key: string]: string[]} = {
    'classes': [CLASSES_ROUTE],
    'race': [RACE_ROUTE],
    'character': [CHARACTERS_ROUTE],
  }

  const handleDelete = async (e: any) => {
    e.stopPropagation()
    await CharactersServices.deleteCharacter(id);
    ChStore.getCharacters();
  }

  return (
    <Flex 
      onClick={() => navigate(ItemTypes[type][0] + `/${id}`)} 
      className={classes.item} 
      p={20} w={250} justify={'space-between'}
    >
      <Stack spacing={6}>
        <Title size={'h4'}>{name}</Title>
        <Text size={'sm'}>{description}</Text>
      </Stack>
      {type === 'character' && <IconTrash onClick={(e) => handleDelete(e)} color="#adb5bd"/>}
    </Flex>
  );
}

export default Item;