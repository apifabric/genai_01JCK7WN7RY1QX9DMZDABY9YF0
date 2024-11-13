import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './EndangeredSpeciesList-card.component.html',
  styleUrls: ['./EndangeredSpeciesList-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.EndangeredSpeciesList-card]': 'true'
  }
})

export class EndangeredSpeciesListCardComponent {


}