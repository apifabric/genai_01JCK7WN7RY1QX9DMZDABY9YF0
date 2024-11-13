import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './Researcher-card.component.html',
  styleUrls: ['./Researcher-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.Researcher-card]': 'true'
  }
})

export class ResearcherCardComponent {


}