import { Button, Flex, Select, Stack, TextInput } from "@mantine/core";
import { useContext, useEffect, useState } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { Context } from "../../../main";
import { observer } from "mobx-react-lite";
import SubraceInput from "./SubraceInput";
import { IRace } from "../../../models/IRace";
import { IClasses } from "../../../models/IClasses";

interface props {
  handleCreate: Function;
}

const CharactersCreateFields = ({handleCreate}: props) => {
  const {CStore, RStore} = useContext(Context);
  const {control, watch} = useFormContext();
  const [race, setRace] = useState<IRace[]>();
  const [classes, setClasses] = useState<IClasses[]>();

  useEffect(() => {
    CStore.getClasses()
    .then(response => setClasses(response?.data));
    RStore.getRace()
    .then(response => setRace(response?.data));
  }, []);

  const handleDisable = () => {
    if (watch('name') && watch('class_id') && watch('race')) {
      return false;
    } else {
      return true;
    }
  }

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
                classes ? 
                classes?.map((item) => {return {label: item.class_name, value: `${item.class_id}`}}) 
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
                race ? 
                race?.map((item) => {return {label: item.race_name, value: `${item.race_id}`}}) 
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
      <Button disabled={handleDisable()} onClick={() => handleCreate()} className="button">Создать</Button>
    </Stack>
  );
}

export default observer(CharactersCreateFields);