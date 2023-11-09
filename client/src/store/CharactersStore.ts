import { makeAutoObservable } from "mobx";
import { ICharacter } from "../models/ICharacter";
import CharactersServices from "../services/CharactersServices";

export class CharactersStore {
  characters = {} as ICharacter[] | undefined;
  character = {} as ICharacter | undefined;
  isLoading = false;

  constructor() {
    makeAutoObservable(this);
    this.characters = undefined;
    this.character = undefined;
  }

  setCharacters(characters: ICharacter[]) {
    this.characters = characters;
  }

  setCharacter(character: ICharacter) {
    this.character = character;
  }

  setIsLoading(isLoading: boolean) {
    this.isLoading = isLoading;
  }

  async getCharacters() {
    this.setIsLoading(true);
    try {
      CharactersServices.getCharacters().then(response => {
        this.setCharacters(response.data);
      })
    } catch (error) {
      console.log(error)
    } finally {
      this.setIsLoading(false);
    }
  }

  async getOneCharacter(id: number) {
    this.setIsLoading(true);
    try {
      CharactersServices.getOneCharacter(id).then(response => {
        this.setCharacter(response.data);
      })
    } catch (error) {
      console.log(error)
    } finally {
      this.setIsLoading(false);
    }
  }
}