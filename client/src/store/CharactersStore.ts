import { makeAutoObservable } from "mobx";
import { ICharacter } from "../models/ICharacter";

export class CharactersStore {
  characters = {} as ICharacter[] | undefined;

  constructor() {
    makeAutoObservable(this);
    this.characters = undefined;
  }

  setCharacters(characters: ICharacter[]) {
    this.characters = characters;
  }
}