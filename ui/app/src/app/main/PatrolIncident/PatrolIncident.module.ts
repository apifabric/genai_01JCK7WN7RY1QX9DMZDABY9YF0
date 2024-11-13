import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {PATROLINCIDENT_MODULE_DECLARATIONS, PatrolIncidentRoutingModule} from  './PatrolIncident-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    PatrolIncidentRoutingModule
  ],
  declarations: PATROLINCIDENT_MODULE_DECLARATIONS,
  exports: PATROLINCIDENT_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PatrolIncidentModule { }