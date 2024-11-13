import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './Habitat-card.component.html',
  styleUrls: ['./Habitat-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.Habitat-card]': 'true'
  }
})

export class HabitatCardComponent {


}