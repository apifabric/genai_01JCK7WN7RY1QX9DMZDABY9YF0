import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {CONSERVATIONPROJECT_MODULE_DECLARATIONS, ConservationProjectRoutingModule} from  './ConservationProject-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    ConservationProjectRoutingModule
  ],
  declarations: CONSERVATIONPROJECT_MODULE_DECLARATIONS,
  exports: CONSERVATIONPROJECT_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ConservationProjectModule { }