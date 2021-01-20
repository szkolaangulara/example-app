import {Component, Input, OnInit} from '@angular/core';
import {Car} from '../interfaces/car.interface';

@Component({
  selector: 'app-car-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() public car: Car;

  constructor() { }

  ngOnInit(): void {
  }

}
