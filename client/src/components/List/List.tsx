import { Flex } from "@mantine/core";
import Item from "./Item";

interface ListDataProps {
  id: number,
  name: string,
  description: string
}

interface ListProps {
  listData: ListDataProps[],
  type: string
}

const List = ({listData, type}: ListProps) => {

  return (
    <Flex wrap={'wrap'} gap={20}>
      {listData && (
        listData.map((item => (
          <Item key={item.id} {...item} type={type}/>
        )))
      )}
    </Flex>
  );
}

export default List;


