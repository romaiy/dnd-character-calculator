import { Flex, Stack } from "@mantine/core";
import { AppRoutes } from "../utils/routes";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import NavbarNested from "./Navbar/Navbar";

const AppRouter = () => {
  const location = useLocation();
  
  if (location.pathname === '/') {
    return <Navigate to={'/race'}/>
  }

  return(
    <Flex>
      <NavbarNested/>
      <Stack>
        <Routes>
          {AppRoutes.map(({path, Component}) => (
            <Route key={path} path={path} element={<Component/>}/>
          ))}
        </Routes>
      </Stack>
    </Flex>
  );
};

export default AppRouter;