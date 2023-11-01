import { Flex } from "@mantine/core";
import Item from "./Item";
import { useLocation } from "react-router-dom";
import { CHARACTERS_ROUTE } from "../../utils/const";
import ItemAdd from "./ItemAdd";

interface ListDataProps {
  id: number,
  name: string,
  description: string,
}

interface ListProps {
  listData: ListDataProps[],
  type: string,
}

const List = ({listData, type}: ListProps) => {
  const location = useLocation();

  return (
    <Flex wrap={'wrap'} gap={20}>
      {listData && (
        listData.map((item => (
          <Item key={item.id} {...item} type={type}/>
        )))
      )}
      {location.pathname === CHARACTERS_ROUTE && <ItemAdd/>}
    </Flex>
  );
}

export default List;


