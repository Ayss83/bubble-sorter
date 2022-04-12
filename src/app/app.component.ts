import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  elementList: number[] = [];

  populateElements(quantity: number) {
    this.elementList = this.createElements(quantity);
  }

  createElements(quantity: number): number[] {
    const result: number[] = [];

    for(let i = 0; i < quantity; i++) {
      result.push(Math.floor(Math.random() * 250));
    }

    return result;
  }
}
