import { Flex, Stack } from "@mantine/core";
import { observer } from "mobx-react-lite";
import TitleWrapper from "./TitleWrapper";

type Props = {
  children?: React.ReactNode[];
};

const Wrapper = ({children}: Props) => {

  return (
    <Flex justify="space-between" p={40} gap='1rem'>
      <Stack spacing={20} w={1248}>
        <TitleWrapper/>
        {children ? children[0] : <></>}
      </Stack>
      <Stack w={300}>
        {children ? children[1] : <></>}
      </Stack>
    </Flex>
  );
};

export default observer(Wrapper);