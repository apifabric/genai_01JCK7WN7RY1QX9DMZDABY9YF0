import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'ConservationProject-new',
  templateUrl: './ConservationProject-new.component.html',
  styleUrls: ['./ConservationProject-new.component.scss']
})
export class ConservationProjectNewComponent {
  @ViewChild("ConservationProjectForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}