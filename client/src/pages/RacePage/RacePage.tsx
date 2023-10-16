import { useContext, useEffect, useState } from "react";
import Wrapper from "../../components/Wrappers/Wrapper";
import { Context } from "../../main";
import RaceServices from "../../services/RaceServices";
import List from "../../components/List/List";

interface ListDataProps {
  id: number,
  name: string,
  description: string
}

const RacePage = () => {
  const {RStore} = useContext(Context);
  const [listData, setListData] = useState<ListDataProps[]>([]);

  useEffect(() => {
    try {
      RaceServices.getRace().then(response => {
        RStore.setRace(response.data);
        const data = response.data.map(item => {
          return {id: item.race_id, name: item.name, description: item.description}
        });
        setListData(data);
      })
    } catch (error) {
      console.log(error)
    }
  }, []);

  return (
    <Wrapper>
      <List listData={listData} type="race"/>
      <></>
    </Wrapper>
  );
};

export default RacePage;