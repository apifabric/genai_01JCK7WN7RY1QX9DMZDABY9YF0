import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {ILLEGALACTIVITY_MODULE_DECLARATIONS, IllegalActivityRoutingModule} from  './IllegalActivity-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    IllegalActivityRoutingModule
  ],
  declarations: ILLEGALACTIVITY_MODULE_DECLARATIONS,
  exports: ILLEGALACTIVITY_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class IllegalActivityModule { }