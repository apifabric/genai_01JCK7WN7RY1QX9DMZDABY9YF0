import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {RESEARCHERSTUDYLINK_MODULE_DECLARATIONS, ResearcherStudyLinkRoutingModule} from  './ResearcherStudyLink-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    ResearcherStudyLinkRoutingModule
  ],
  declarations: RESEARCHERSTUDYLINK_MODULE_DECLARATIONS,
  exports: RESEARCHERSTUDYLINK_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ResearcherStudyLinkModule { }