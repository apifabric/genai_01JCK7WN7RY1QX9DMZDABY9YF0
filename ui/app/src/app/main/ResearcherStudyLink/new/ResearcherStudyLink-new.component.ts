import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'ResearcherStudyLink-new',
  templateUrl: './ResearcherStudyLink-new.component.html',
  styleUrls: ['./ResearcherStudyLink-new.component.scss']
})
export class ResearcherStudyLinkNewComponent {
  @ViewChild("ResearcherStudyLinkForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}