import { makeAutoObservable } from "mobx";
import { IRace } from "../models/IRace";
import RaceServices from "../services/RaceServices";
import { ISubrace } from "../models/ISubrace";

export default class RaseStore {
  race = {} as IRace[] | undefined;
  subrace = {} as ISubrace[] | undefined;
  
  constructor() {
    makeAutoObservable(this);
    this.race = undefined;
    this.subrace = undefined;
  }

  setRace(race: IRace[]) {
    this.race = race;
  }

  setSubrace(subrace: ISubrace[] | undefined) {
    this.subrace = subrace;
  }

  async getRace() {
    try {
      RaceServices.getRace().then(response => {
        this.setRace(response.data);
      })
    } catch (error) {
      console.log(error)
    }
  }

  async getSubrace(id: string) {
    try {
      RaceServices.getSubrace(id).then(response => {
        this.setSubrace(response.data);
      })
    } catch (error) {
      console.log(error)
    }
  }
}