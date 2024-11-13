import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './IllegalActivity-card.component.html',
  styleUrls: ['./IllegalActivity-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.IllegalActivity-card]': 'true'
  }
})

export class IllegalActivityCardComponent {


}