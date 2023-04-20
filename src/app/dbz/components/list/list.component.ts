import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  @Input()
  public characters: Character[] = [];

  @Output()
  public onRemoveCharacterEvent: EventEmitter<string> = new EventEmitter();

  onRemoveCharacter(id?: string) {
    if (!id) return;

    this.onRemoveCharacterEvent.emit(id);
  }
}
