import { Stack, Title, Text, createStyles } from "@mantine/core";
import { IRace } from "../../../models/IRace";
import { useNavigate } from "react-router-dom";
import { RACE_ROUTE } from "../../../utils/const";

const useStyles = createStyles((theme) => ({
  item: {
    background: '#FFFF',
    borderRadius: '16px',
    color: theme.colors.gray[8],
    transition: 'all 0.7s',
    cursor: 'pointer',
    '&:hover': {
      background: theme.colors.indigo[7],
      color: 'white'
    }
  }
}))

const RaceItem = ({name, description, race_id} : IRace) => {
  const { classes } = useStyles();
  const navigate = useNavigate()

  return (
    <Stack 
      onClick={() => navigate(RACE_ROUTE + `/${race_id}`)} 
      className={classes.item} 
      p={20} w={250} spacing={6}
    >
      <Title size={'h4'}>{name}</Title>
      <Text size={'sm'}>{description}</Text>
    </Stack>
  );
}

export default RaceItem;