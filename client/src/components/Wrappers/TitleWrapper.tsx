import { useLocation, useNavigate } from "react-router-dom";
import { AppRoutes } from "../../utils/routes";
import { ActionIcon, Flex, Title } from "@mantine/core";
import { IconChevronLeft } from "@tabler/icons-react";

const TitleWrapper = () => {
  const location = useLocation();
  const navigate = useNavigate()
  const title = AppRoutes.find(item => item.path === location.pathname)?.title!;
  
  return (
    <Flex gap={24} align={'center'}>
        <Title size={'h1'}>{title}</Title>
    </Flex>
  );
};

export default TitleWrapper;