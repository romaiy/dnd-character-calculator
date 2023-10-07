import { useContext, useEffect } from "react";
import { Context } from "../../main";
import RaceServices from "../../services/RaceServices";
import { observer } from "mobx-react-lite";
import Wrapper from "../../components/Wrappers/Wrapper";

const RacePage = () => {
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
    <Wrapper>
      <div>
        {RStore.race && (
          RStore.race.map((item => (
            <div key={item.race_id}>{item.name}</div>
          )))
        )}
      </div>
      <></>
    </Wrapper>
  );
};

export default observer(RacePage);