import { Flex, Stack } from "@mantine/core";
import { AppRoutes } from "../utils/routes";
import { Route, Routes } from "react-router-dom";

const AppRouter = () => {
  return(
    <Flex>
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