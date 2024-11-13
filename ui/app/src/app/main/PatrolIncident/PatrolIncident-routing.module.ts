import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatrolIncidentHomeComponent } from './home/PatrolIncident-home.component';
import { PatrolIncidentNewComponent } from './new/PatrolIncident-new.component';
import { PatrolIncidentDetailComponent } from './detail/PatrolIncident-detail.component';

const routes: Routes = [
  {path: '', component: PatrolIncidentHomeComponent},
  { path: 'new', component: PatrolIncidentNewComponent },
  { path: ':id', component: PatrolIncidentDetailComponent,
    data: {
      oPermission: {
        permissionId: 'PatrolIncident-detail-permissions'
      }
    }
  }
];

export const PATROLINCIDENT_MODULE_DECLARATIONS = [
    PatrolIncidentHomeComponent,
    PatrolIncidentNewComponent,
    PatrolIncidentDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatrolIncidentRoutingModule { }