import { Flex, Stack, Text } from "@mantine/core";
import { ICharacter } from "../../../models/ICharacter";
import { IconEdit } from "@tabler/icons-react";
import { observer } from "mobx-react-lite";

interface props {
  character: ICharacter;
}

const CharacterInfo = ({character}: props) => {

  return (
    <Stack bg={'#ffff'} p={40} style={{borderRadius: '16px'}} spacing={24}>
      <Flex justify={'space-between'}>
        <Text size={'lg'} color="gray.5">Общая информация</Text>
        <IconEdit/>
      </Flex>
      <Stack spacing={16}>
        <Flex align={'center'} gap={16}>
          <Text size={'md'} color="gray.5">Имя:</Text>
          <Text size={'md'}>{character?.name}</Text>
        </Flex>
        <Flex align={'center'} gap={16}>
          <Text size={'md'} color="gray.5">Раса:</Text>
          <Text size={'md'}>{character?.race_name}</Text>
        </Flex>
        <Flex align={'center'} gap={16}>
          <Text size={'md'} color="gray.5">Класс:</Text>
          <Text size={'md'}>{character?.class_name}</Text>
        </Flex>
      </Stack>
    </Stack>
  );
}

export default observer(CharacterInfo);