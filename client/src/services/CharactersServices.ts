import { AxiosResponse } from "axios";
import $api from "../http";
import { ICharacter } from "../models/ICharacter";

export default class CharactersServices {

  static async getCharacters() : Promise<AxiosResponse<ICharacter[]>> {
    return $api.get<ICharacter[]>('/characters');
  }

  static async getOneCharacter(id: number) : Promise<AxiosResponse<ICharacter>> {
    return $api.get<ICharacter>(`/character/${id}`);
  }

  static async deleteCharacter(id: number) : Promise<AxiosResponse> {
    return $api.delete(`/character/${id}`);
  }
}