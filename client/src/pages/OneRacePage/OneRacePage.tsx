import { useEffect, useState } from "react";
import { IRace } from "../../models/IRace";
import RaceServices from "../../services/RaceServices";
import { useParams } from "react-router-dom";
import { Title } from "@mantine/core";
import Wrapper from "../../components/Wrappers/Wrapper";

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
      <Title size={'h1'}>{race?.name}</Title>
    )
  }

  return (
    <Wrapper CustomTitle={CustomTitle}>
      <></>
      <></>
    </Wrapper>
  );
}

export default OnePacePage;