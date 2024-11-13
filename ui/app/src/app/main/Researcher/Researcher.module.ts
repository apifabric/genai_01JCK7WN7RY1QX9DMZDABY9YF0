import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {RESEARCHER_MODULE_DECLARATIONS, ResearcherRoutingModule} from  './Researcher-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    ResearcherRoutingModule
  ],
  declarations: RESEARCHER_MODULE_DECLARATIONS,
  exports: RESEARCHER_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ResearcherModule { }