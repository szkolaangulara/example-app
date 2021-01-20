import {Component, Input, OnInit} from '@angular/core';
import {Customer} from '../interfaces/customer.interface';

@Component({
  selector: 'app-customer-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Input() public customer: Customer;

}
