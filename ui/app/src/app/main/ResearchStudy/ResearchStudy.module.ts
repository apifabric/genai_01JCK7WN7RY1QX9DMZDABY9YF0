import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {RESEARCHSTUDY_MODULE_DECLARATIONS, ResearchStudyRoutingModule} from  './ResearchStudy-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    ResearchStudyRoutingModule
  ],
  declarations: RESEARCHSTUDY_MODULE_DECLARATIONS,
  exports: RESEARCHSTUDY_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ResearchStudyModule { }