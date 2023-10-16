import { Flex, Stack, Text, Title } from "@mantine/core";

const AbilityCard = ({
  size, 
  speed, 
  modifier, 
  characteristicName,
  ability
}: IRaceDetails) => {

  return (
    <Stack spacing={16} p={30} bg={'#fff'} style={{borderRadius: '16px'}}>
      <Title align="center" size={'h3'}>Характеристики</Title>
      <Stack spacing={8}>
      <Flex justify={'space-between'}>
        <Text size={'lg'} color="gray.6">Скорость передвижения:</Text>
        <Text size={'lg'}>{speed} футов</Text>
      </Flex>
      <Flex justify={'space-between'}>
        <Text size={'lg'} color="gray.6">Размер:</Text>
        <Text size={'lg'}>{size}</Text>
      </Flex>
      </Stack>
      <Flex justify={'space-between'}>
        <Text size={'lg'} color="gray.6">Увеличение характеристик:</Text>
        <Text size={'lg'}>{characteristicName.slice(0, 3)} +{modifier}</Text>
      </Flex>
      <Flex wrap={'wrap'} justify={'space-between'}>
        <Text size={'lg'} color="gray.6">Способности:</Text>
        <Text size={'lg'}>{ability}</Text>
      </Flex>
    </Stack>
  );
}

export default AbilityCard;