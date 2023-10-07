import { Box, Flex } from "@mantine/core";
import { AppRoutes } from "../../../utils/routes";
import LinksItem from "./LinksItem";

const LinksList = () => {

  return (
    <Box>
      <Flex gap={10}>
        {AppRoutes.map(link => {
          if (link.title !== 'Главная страница') {
            return (
              <LinksItem {...link}/>
            );
          }
        })}
      </Flex>
    </Box>
  );
}

export default LinksList;