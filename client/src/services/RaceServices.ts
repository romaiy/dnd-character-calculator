import { AxiosResponse } from "axios";
import { IRace } from "../models/IRace";
import $api from "../http";
import { ISubrace } from "../models/ISubrace";

export default class RaceServices {

  static async getRace() : Promise<AxiosResponse<IRace[]>> {
    return $api.get<IRace[]>('/race');
  }

  static async getOneRace(id: string) : Promise<AxiosResponse<IRace>> {
    return $api.get<IRace>(`/race/${id}`);
  }

  static async getSubrace(id: string) : Promise<AxiosResponse<ISubrace>> {
    return $api.get<ISubrace>(`/subrace/${id}`);
  }
}