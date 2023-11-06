import Wrapper from "../../components/Wrappers/Wrapper";
import { useContext, useEffect, useState } from "react";
import { Context } from "../../main";
import List from "../../components/List/List";
import { observer } from "mobx-react-lite";

interface ListDataProps {
  id: number,
  name: string,
  description: string
}

const ClassesPage = () => {
  const {CStore} = useContext(Context);
  const [listData, setListData] = useState<ListDataProps[]>([]);

  useEffect(() => {
    CStore.getClasses();
  }, []);

  useEffect(() => {
    const data = CStore.classes?.map(item => {
      return {id: item.class_id, name: item.class_name, description: item.description}
    });
    setListData(data!);
  }, [CStore.classes])
  
  return (
    <Wrapper>
      <List listData={listData} type="classes"/>
      <></>
    </Wrapper>
  );
};

export default observer(ClassesPage);