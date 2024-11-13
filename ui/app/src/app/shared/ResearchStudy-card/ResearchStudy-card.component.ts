import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './ResearchStudy-card.component.html',
  styleUrls: ['./ResearchStudy-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.ResearchStudy-card]': 'true'
  }
})

export class ResearchStudyCardComponent {


}