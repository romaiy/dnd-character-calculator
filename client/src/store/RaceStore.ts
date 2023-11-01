import { makeAutoObservable } from "mobx";
import { IRace } from "../models/IRace";
import RaceServices from "../services/RaceServices";

export default class RaseStore {
  race = {} as IRace[] | undefined;
  
  constructor() {
    makeAutoObservable(this);
    this.race = undefined;
  }

  setRace(race: IRace[]) {
    this.race = race;
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

  async getSubrace() {
    try {
      
    } catch (error) {
      console.log(error)
    }
  }
}