import { Component } from '@angular/core';

@Component({
  templateUrl: './counter.component.html',
  selector: 'app-counter',
})
export class CounterComponent {
  public counter: number = 12;

  increaseBy(value: number): void {
    this.counter += value;
  }

  resetCounter(): void {
    this.counter = 12;
  }
}
