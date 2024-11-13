import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './Ranger-card.component.html',
  styleUrls: ['./Ranger-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.Ranger-card]': 'true'
  }
})

export class RangerCardComponent {


}