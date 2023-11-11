import { makeAutoObservable } from "mobx";
import ClassesServices from "../services/ClassesServices";

export class ClassesStore {

  constructor() {
    makeAutoObservable(this);
  }

  async getClasses() {
    try {
      return ClassesServices.getClasses();
    } catch (error) {
      console.log(error)
    }
  }
}