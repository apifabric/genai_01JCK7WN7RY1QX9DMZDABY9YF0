import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {RANGERPATROL_MODULE_DECLARATIONS, RangerPatrolRoutingModule} from  './RangerPatrol-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    RangerPatrolRoutingModule
  ],
  declarations: RANGERPATROL_MODULE_DECLARATIONS,
  exports: RANGERPATROL_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RangerPatrolModule { }