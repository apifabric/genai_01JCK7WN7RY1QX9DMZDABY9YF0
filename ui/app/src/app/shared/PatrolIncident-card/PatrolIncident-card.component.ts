import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './PatrolIncident-card.component.html',
  styleUrls: ['./PatrolIncident-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.PatrolIncident-card]': 'true'
  }
})

export class PatrolIncidentCardComponent {


}