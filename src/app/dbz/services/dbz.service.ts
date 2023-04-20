import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character';
import { v4 as uuid } from 'uuid';

@Injectable({ providedIn: 'root' })
export class DBZService {
  private characters: Character[] = [
    {
      id: uuid(),
      name: 'krillin',
      power: 1000,
    },
    {
      id: uuid(),
      name: 'goku',
      power: 3200,
    },
    {
      id: uuid(),
      name: 'Vegeta',
      power: 3000,
    },
    {
      id: uuid(),
      name: 'Kamisama',
      power: 3100,
    },
  ];

  getCharacters(): Array<Character> {
    return this.characters;
  }

  addNewCharacter(character: Character): void {
    const newCharacter: Character = {
      ...character,
      id: uuid(),
    };

    this.characters.push(newCharacter);
  }

  deleteCharacterById(id: string): void {
    this.characters = this.characters.filter((c) => c.id !== id);
  }
}
