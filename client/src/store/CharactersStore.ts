import { makeAutoObservable } from "mobx";
import CharactersServices from "../services/CharactersServices";

export class CharactersStore {

  constructor() {
    makeAutoObservable(this);
  }

  async getCharacters() {
    try {
      return CharactersServices.getCharacters();
    } catch (error) {
      console.log(error)
    }
  }

  async getOneCharacter(id: number) {
    try {
      return CharactersServices.getOneCharacter(id);
    } catch (error) {
      console.log(error)
    }
  }
}