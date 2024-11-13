import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'Habitat-new',
  templateUrl: './Habitat-new.component.html',
  styleUrls: ['./Habitat-new.component.scss']
})
export class HabitatNewComponent {
  @ViewChild("HabitatForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}