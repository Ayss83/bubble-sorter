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

  bubbleSorter = (counter = 0) => {
    let isSorted = true;

    for (let i = 0; i < this.elementList.length - 1 - counter; i++) {
      const swapNeeded = this.elementList[i] > this.elementList[i + 1];

      if (swapNeeded) {
        this.swapElements(i);
        isSorted = false;
      }
    }

    counter++;

    if(!isSorted) {
      setTimeout(() => {
        this.bubbleSorter(counter);
      }, 20);
    }
  }

  private swapElements(index: number) {
    const swapBuffer = this.elementList[index];
    this.elementList[index] = this.elementList[index + 1];
    this.elementList[index + 1] = swapBuffer;
  }
}
