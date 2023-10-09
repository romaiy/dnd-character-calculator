import { AxiosResponse } from "axios";
import { IRace } from "../models/IRace";
import $api from "../http";

export default class RaceServices {

  static async getRace() : Promise<AxiosResponse<IRace[]>> {
    return $api.get<IRace[]>('/race');
  }

  static async getOneRace(id: string) : Promise<AxiosResponse<IRace>> {
    return $api.get<IRace>(`/race/${id}`);
  }
}