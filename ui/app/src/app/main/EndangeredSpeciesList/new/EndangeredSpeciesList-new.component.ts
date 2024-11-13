import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'EndangeredSpeciesList-new',
  templateUrl: './EndangeredSpeciesList-new.component.html',
  styleUrls: ['./EndangeredSpeciesList-new.component.scss']
})
export class EndangeredSpeciesListNewComponent {
  @ViewChild("EndangeredSpeciesListForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}