import { makeAutoObservable } from "mobx";
import { IClasses } from "../models/IClasses";
import ClassesServices from "../services/ClassesServices";

export class ClassesStore {
  classes = {} as IClasses[] | undefined;

  constructor() {
    makeAutoObservable(this);
    this.classes = undefined;
  }

  setClasses(classes: IClasses[]) {
    this.classes = classes;
  }

  async getClasses() {
    try {
      ClassesServices.getClasses().then(response => {
        this.setClasses(response.data);
      })
    } catch (error) {
      console.log(error)
    }
  }
}