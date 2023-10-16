import { AxiosResponse } from "axios";
import { IClasses } from "../models/IClasses";
import $api from "../http";

export default class ClassesServices {

  static async getClasses() : Promise<AxiosResponse<IClasses[]>> {
    return $api.get<IClasses[]>('/classes');
  }
}