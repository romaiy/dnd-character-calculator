import { Button, Flex, Select, Stack, TextInput } from "@mantine/core";
import { useContext, useEffect } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { Context } from "../../../main";
import { observer } from "mobx-react-lite";
import SubraceInput from "./SubraceInput";

interface props {
  handleCreate: Function;
}

const CharactersCreateFields = ({handleCreate}: props) => {
  const {CStore, RStore} = useContext(Context);
  const {control} = useFormContext();

  useEffect(() => {
    CStore.getClasses();
    RStore.getRace();
  }, []);

  return (
    <Stack bg={'#ffff'} p={40} style={{borderRadius: '16px'}} spacing={24}>
      <Flex gap={16}>
        <Controller
          control={control}
          name="name"
          render={({field}) => 
            <TextInput
              {...field}
              label="Введите имя персонажа"
              placeholder='Ульфгард Шелест Листьев'
              className="input"
            />
          }
        />
        <Controller
          control={control}
          name="class_id"
          render={({field}) => 
            <Select 
              {...field}
              data={
                CStore.classes ? 
                CStore.classes?.map((item) => {return {label: item.class_name, value: `${item.class_id}`}}) 
                : []
              }
              placeholder="Друид"
              label="Выберете класс персонажа"
              className="input"
            />
          }
        />
      </Flex>
      <Flex gap={16}>
        <Controller
          control={control}
          name='race'
          render={({field}) => 
            <Select 
              {...field}
              data={
                RStore.race ? 
                RStore.race?.map((item) => {return {label: item.race_name, value: `${item.race_id}`}}) 
                : []
              }
              placeholder="Дварф"
              label="Выберете расу персонажа"
              className="input"
            />
          }
        />
        <SubraceInput/>
      </Flex>
      <Button onClick={() => handleCreate()} className="button">Создать</Button>
    </Stack>
  );
}

export default observer(CharactersCreateFields);