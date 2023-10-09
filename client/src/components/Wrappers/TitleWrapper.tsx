import { useLocation } from "react-router-dom";
import { AppRoutes } from "../../utils/routes";
import { Flex, Title } from "@mantine/core";

const TitleWrapper = () => {
  const location = useLocation();
  const title = AppRoutes.find(item => item.path === location.pathname)?.title!;
  
  if (title !== 'Id') return (
    <Flex gap={24} align={'center'}>
        <Title size={'h1'}>{title}</Title>
    </Flex>
  );
};

export default TitleWrapper;