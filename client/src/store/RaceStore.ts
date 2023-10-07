import { makeAutoObservable } from "mobx";
import { IRace } from "../models/IRace";

export default class RaseStore {
  race = {} as IRace[] | undefined;
  
  constructor() {
    makeAutoObservable(this);
    this.race = undefined;
  }

  setRace(race: IRace[]) {
    this.race = race;
  }
}