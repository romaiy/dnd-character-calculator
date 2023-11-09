import { Image } from "@mantine/core";
import { useFormContext } from "react-hook-form";
import { raceImage } from "../../../utils/raceImage";

interface props {
  id: number | undefined,
}

const CharacterImage = ({id}: props) => {
  const {watch} = useFormContext();
  const race: string = watch('race');

  return (
    <div >
      {(race || id) && <Image className="image" width={503} height={670} src={id ? raceImage[id] : raceImage[race]}/>}
    </div>
  );
}

export default CharacterImage;