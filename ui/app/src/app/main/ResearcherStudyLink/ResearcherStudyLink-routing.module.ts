import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResearcherStudyLinkHomeComponent } from './home/ResearcherStudyLink-home.component';
import { ResearcherStudyLinkNewComponent } from './new/ResearcherStudyLink-new.component';
import { ResearcherStudyLinkDetailComponent } from './detail/ResearcherStudyLink-detail.component';

const routes: Routes = [
  {path: '', component: ResearcherStudyLinkHomeComponent},
  { path: 'new', component: ResearcherStudyLinkNewComponent },
  { path: ':id', component: ResearcherStudyLinkDetailComponent,
    data: {
      oPermission: {
        permissionId: 'ResearcherStudyLink-detail-permissions'
      }
    }
  }
];

export const RESEARCHERSTUDYLINK_MODULE_DECLARATIONS = [
    ResearcherStudyLinkHomeComponent,
    ResearcherStudyLinkNewComponent,
    ResearcherStudyLinkDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResearcherStudyLinkRoutingModule { }