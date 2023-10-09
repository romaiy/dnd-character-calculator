import { useContext, useEffect } from "react";
import { Context } from "../../../main";
import RaceServices from "../../../services/RaceServices";
import { observer } from "mobx-react-lite";
import { Flex } from "@mantine/core";
import RaceItem from "./RaceItem";

const RaceList = () => {
  const {RStore} = useContext(Context);

  useEffect(() => {
    try {
      RaceServices.getRace().then(response => {
        RStore.setRace(response.data);
      })
    } catch (error) {
      console.log(error)
    }
  }, [])

  return (
    <Flex wrap={'wrap'} gap={30}>
      {RStore.race && (
        RStore.race.map((item => (
          <RaceItem key={item.race_id} {...item}/>
        )))
      )}
    </Flex>
  );
};

export default observer(RaceList);