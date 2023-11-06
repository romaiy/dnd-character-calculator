import { makeAutoObservable } from "mobx";
import { ICharacter } from "../models/ICharacter";
import CharactersServices from "../services/CharactersServices";

export class CharactersStore {
  characters = {} as ICharacter[] | undefined;

  constructor() {
    makeAutoObservable(this);
    this.characters = undefined;
  }

  setCharacters(characters: ICharacter[]) {
    this.characters = characters;
  }

  async getCharacters() {
    try {
      CharactersServices.getCharacters().then(response => {
        this.setCharacters(response.data);
      })
    } catch (error) {
      console.log(error)
    }
  }
}