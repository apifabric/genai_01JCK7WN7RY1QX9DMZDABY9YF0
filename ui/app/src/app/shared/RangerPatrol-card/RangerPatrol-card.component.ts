import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './RangerPatrol-card.component.html',
  styleUrls: ['./RangerPatrol-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.RangerPatrol-card]': 'true'
  }
})

export class RangerPatrolCardComponent {


}