import { Flex, Loader, Stack } from "@mantine/core";
import { observer } from "mobx-react-lite";
import TitleWrapper from "./TitleWrapper";
import { useContext } from "react";
import { Context } from "../../main";

type Props = {
  children?: React.ReactNode[];
  CustomTitle?: () => JSX.Element;
};

const Wrapper = ({children, CustomTitle}: Props) => {
  const {ChStore} = useContext(Context);
  
  if (ChStore.isLoading) {
    return <Loader/>
  }

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