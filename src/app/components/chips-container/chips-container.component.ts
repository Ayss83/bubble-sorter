import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-chips-container',
  templateUrl: './chips-container.component.html',
  styleUrls: ['./chips-container.component.scss'],
})
export class ChipsContainerComponent implements OnInit {
  @Input() elementList!: number[];

  constructor() {}

  ngOnInit(): void {}
}
