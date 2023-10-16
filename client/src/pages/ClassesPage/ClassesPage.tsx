import Wrapper from "../../components/Wrappers/Wrapper";
import { useContext, useEffect, useState } from "react";
import { Context } from "../../main";
import ClassesServices from "../../services/ClassesServices";
import List from "../../components/List/List";

interface ListDataProps {
  id: number,
  name: string,
  description: string
}

const ClassesPage = () => {
  const {CStore} = useContext(Context);
  const [listData, setListData] = useState<ListDataProps[]>([]);

  useEffect(() => {
    try {
      ClassesServices.getClasses().then(response => {
        CStore.setClasses(response.data);
        const data = response.data.map(item => {
          return {id: item.class_id, name: item.name, description: item.description}
        });
        setListData(data);
      })
    } catch (error) {
      console.log(error)
    }
  }, []);
  
  return (
    <Wrapper>
      <List listData={listData} type="classes"/>
      <></>
    </Wrapper>
  );
};

export default ClassesPage;