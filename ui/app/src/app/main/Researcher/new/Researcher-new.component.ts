import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'Researcher-new',
  templateUrl: './Researcher-new.component.html',
  styleUrls: ['./Researcher-new.component.scss']
})
export class ResearcherNewComponent {
  @ViewChild("ResearcherForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}