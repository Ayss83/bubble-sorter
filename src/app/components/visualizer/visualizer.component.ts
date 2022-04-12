import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-visualizer',
  templateUrl: './visualizer.component.html',
  styleUrls: ['./visualizer.component.scss']
})
export class VisualizerComponent implements OnInit {
  @Input() elementList!: number[];

  constructor() { }

  ngOnInit(): void {
  }

}
