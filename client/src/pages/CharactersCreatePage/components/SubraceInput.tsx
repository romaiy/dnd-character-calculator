import { Controller, useFormContext } from "react-hook-form";
import { Select } from "@mantine/core";
import { useContext, useEffect, useState } from "react";
import { Context } from "../../../main";
import { observer } from "mobx-react-lite";

const SubraceInput = () => {
  
  const {RStore} = useContext(Context);
  const [subrace, setSubrace] = useState<{label: string, value: string}[]>([]);
  const {control, watch, setValue} = useFormContext();
  const race = watch('race');

  useEffect(() => {
    race && RStore.getSubrace(race);
  }, [race]);

  useEffect(() => {
    if (RStore.subrace?.length) {
      const data = RStore.subrace?.map(item => {
        return {value: `${item.name}`, label: item.name}
      });
      setSubrace(data!);
    } else {
      RStore.setSubrace(undefined);
      setValue('subrace', null);
      setSubrace([]);
    }
  }, [RStore.subrace])


  return (
    <>
      {
        subrace.length > 0 && <Controller
          name="subrace"
          control={control}
          render={({field}) =>
            <Select
              {...field}
              label="Выберете подрассу персонажа"
              data={subrace}
              className="input"
              placeholder="Холмовой дворф"
            />
          }
        />
      }
    </>
  );
}

export default observer(SubraceInput);