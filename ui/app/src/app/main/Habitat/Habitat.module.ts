import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {HABITAT_MODULE_DECLARATIONS, HabitatRoutingModule} from  './Habitat-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    HabitatRoutingModule
  ],
  declarations: HABITAT_MODULE_DECLARATIONS,
  exports: HABITAT_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HabitatModule { }