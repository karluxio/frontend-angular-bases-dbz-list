import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  public heroesName: Array<string> = ['Spiderman', 'Ironman', 'Hulk'];
  public lastHeroDeleted?: string;

  deleteLastHero() {
    this.lastHeroDeleted = this.heroesName.pop();
  }
}
