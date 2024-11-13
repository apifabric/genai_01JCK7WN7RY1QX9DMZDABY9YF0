import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RangerPatrolHomeComponent } from './home/RangerPatrol-home.component';
import { RangerPatrolNewComponent } from './new/RangerPatrol-new.component';
import { RangerPatrolDetailComponent } from './detail/RangerPatrol-detail.component';

const routes: Routes = [
  {path: '', component: RangerPatrolHomeComponent},
  { path: 'new', component: RangerPatrolNewComponent },
  { path: ':id', component: RangerPatrolDetailComponent,
    data: {
      oPermission: {
        permissionId: 'RangerPatrol-detail-permissions'
      }
    }
  },{
    path: ':patrol_id/PatrolIncident', loadChildren: () => import('../PatrolIncident/PatrolIncident.module').then(m => m.PatrolIncidentModule),
    data: {
        oPermission: {
            permissionId: 'PatrolIncident-detail-permissions'
        }
    }
}
];

export const RANGERPATROL_MODULE_DECLARATIONS = [
    RangerPatrolHomeComponent,
    RangerPatrolNewComponent,
    RangerPatrolDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RangerPatrolRoutingModule { }