import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  elementList: number[] = [];

  populateElements(quantity: number) {
    this.elementList = this.createElements(quantity);
  }

  createElements(quantity: number): number[] {
    const result: number[] = [];

    for (let i = 0; i < quantity; i++) {
      result.push(Math.floor(Math.random() * 250));
    }

    return result;
  }

  bubbleSorter() {
    let isSorted = false;
    let counter = 0;

    while (!isSorted) {
      isSorted = true;
      for (let i = 0; i < this.elementList.length - 1 - counter; i++) {
        if (this.elementList[i] > this.elementList[i + 1]) {
          const swapBuffer = this.elementList[i];
          this.elementList[i] = this.elementList[i + 1];
          this.elementList[i + 1] = swapBuffer;
          isSorted = false;
        }
      }
      counter++;
    }
  }
}
