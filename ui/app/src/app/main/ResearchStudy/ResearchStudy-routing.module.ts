import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResearchStudyHomeComponent } from './home/ResearchStudy-home.component';
import { ResearchStudyNewComponent } from './new/ResearchStudy-new.component';
import { ResearchStudyDetailComponent } from './detail/ResearchStudy-detail.component';

const routes: Routes = [
  {path: '', component: ResearchStudyHomeComponent},
  { path: 'new', component: ResearchStudyNewComponent },
  { path: ':id', component: ResearchStudyDetailComponent,
    data: {
      oPermission: {
        permissionId: 'ResearchStudy-detail-permissions'
      }
    }
  },{
    path: ':study_id/ResearcherStudyLink', loadChildren: () => import('../ResearcherStudyLink/ResearcherStudyLink.module').then(m => m.ResearcherStudyLinkModule),
    data: {
        oPermission: {
            permissionId: 'ResearcherStudyLink-detail-permissions'
        }
    }
}
];

export const RESEARCHSTUDY_MODULE_DECLARATIONS = [
    ResearchStudyHomeComponent,
    ResearchStudyNewComponent,
    ResearchStudyDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResearchStudyRoutingModule { }