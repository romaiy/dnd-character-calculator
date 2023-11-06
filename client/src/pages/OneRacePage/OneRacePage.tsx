import { useEffect, useState } from "react";
import { IRace } from "../../models/IRace";
import RaceServices from "../../services/RaceServices";
import { useParams } from "react-router-dom";
import { Stack, Text, Title } from "@mantine/core";
import Wrapper from "../../components/Wrappers/Wrapper";
import AbilityCard from "./components/AbilityCard";

const OnePacePage = () => {
  const {id} = useParams();
  const [race, setRace] = useState<IRace>();

  useEffect(() => {
    RaceServices.getOneRace(id!).then(response => {
      setRace(response.data);
    })
  }, []);

  const CustomTitle = () => {
    return (
      <Stack spacing={4}>
        <Title size={'h1'}>{race?.race_name}</Title>
        <Text size={'md'} color="gray.5">{race?.description}</Text>
      </Stack>
    )
  }

  return (
    <Wrapper CustomTitle={CustomTitle}>
      <></>
      {race?.details && <AbilityCard {...race?.details}/>}
    </Wrapper>
  );
}

export default OnePacePage;