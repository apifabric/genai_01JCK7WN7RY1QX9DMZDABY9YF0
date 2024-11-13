import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './ConservationProject-card.component.html',
  styleUrls: ['./ConservationProject-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.ConservationProject-card]': 'true'
  }
})

export class ConservationProjectCardComponent {


}