import { useContext, useEffect, useState } from "react";
import Wrapper from "../../components/Wrappers/Wrapper";
import { Context } from "../../main";
import List from "../../components/List/List";
import { observer } from "mobx-react-lite";

interface ListDataProps {
  id: number,
  name: string,
  description: string
}

const RacePage = () => {
  const {RStore} = useContext(Context);
  const [listData, setListData] = useState<ListDataProps[]>([]);

  useEffect(() => {
    RStore.getRace();
  }, []);

  useEffect(() => {
    const data = RStore.race?.map(item => {
      return {id: item.race_id, name: item.race_name, description: item.description}
    });
    setListData(data!);
  }, [RStore.race])

  return (
    <Wrapper>
      <List listData={listData} type="race"/>
      <></>
    </Wrapper>
  );
};

export default observer(RacePage);