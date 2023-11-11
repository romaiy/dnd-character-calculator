import { makeAutoObservable } from "mobx";
import RaceServices from "../services/RaceServices";
export default class RaseStore {
  
  constructor() {
    makeAutoObservable(this);
  }

  async getRace() {
    try {
      return RaceServices.getRace();
    } catch (error) {
      console.log(error)
    }
  }

  async getSubrace(id: string) {
    try {
      return RaceServices.getSubrace(id);
    } catch (error) {
      console.log(error)
    }
  }
}