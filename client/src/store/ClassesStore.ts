import { makeAutoObservable } from "mobx";
import { IClasses } from "../models/IClasses";

export class ClassesStore {
  classes = {} as IClasses[] | undefined;

  constructor() {
    makeAutoObservable(this);
    this.classes = undefined;
  }

  setClasses(classes: IClasses[]) {
    this.classes = classes;
  }
}