import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'PatrolIncident-new',
  templateUrl: './PatrolIncident-new.component.html',
  styleUrls: ['./PatrolIncident-new.component.scss']
})
export class PatrolIncidentNewComponent {
  @ViewChild("PatrolIncidentForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}