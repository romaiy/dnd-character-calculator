import { Title, createStyles, Flex } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { IconPlus } from "@tabler/icons-react";

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
}));

const ItemAdd = () => {
  const { classes } = useStyles();
  const navigate = useNavigate();

  return (
    <Flex 
      onClick={() => navigate('/characters/new')} 
      className={classes.item} 
      p={20} w={250} gap={0}
    >
      <Title size={'h4'}>Создать персонажа</Title>
      <IconPlus/>
    </Flex>
  );
}

export default ItemAdd;