import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/character';
import { DBZService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {
  constructor(private readonly dbzService: DBZService) {}

  get characters(): Array<Character> {
    return [...this.dbzService.getCharacters()];
  }

  addNewCharacter(character: Character): void {
    this.dbzService.addNewCharacter(character);
  }

  removeCharacter(id: string): void {
    this.dbzService.deleteCharacterById(id);
  }
}
