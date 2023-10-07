import { Stack } from "@mantine/core";
import { NavLink } from "react-router-dom";

interface props {
  title: string,
  Icon: React.FC<any>,
  path: string,
  Component: React.FC<any>
}

const LinksItem = ({title, Icon, path}: props) => {
  return (
    <NavLink to={path}>
      <Stack w={200} style={{borderRadius: '8px'}} bg={'#ffff'} p={20}>
        {title}
        <Icon/>
      </Stack>
    </NavLink>
  );
}

export default LinksItem;