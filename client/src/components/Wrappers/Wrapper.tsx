import { Flex, Stack } from "@mantine/core";
import { observer } from "mobx-react-lite";
import TitleWrapper from "./TitleWrapper";

type Props = {
  children?: React.ReactNode[];
  CustomTitle?: () => JSX.Element;
};

const Wrapper = ({children, CustomTitle}: Props) => {

  return (
    <Stack bg={'gray.0'} p={'40px'} spacing={24}>
      {CustomTitle ? <CustomTitle/> : <TitleWrapper/>}
      <Flex justify="space-between" gap={16}>
        <Stack w={1021}>
          {children ? children[0] : <></>}
        </Stack>
        <Stack w={503}>
          {children ? children[1] : <></>}
        </Stack>
      </Flex>
    </Stack>
  );
};

export default observer(Wrapper);