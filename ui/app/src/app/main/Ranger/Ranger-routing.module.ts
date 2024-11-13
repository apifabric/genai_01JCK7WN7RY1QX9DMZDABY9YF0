import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RangerHomeComponent } from './home/Ranger-home.component';
import { RangerNewComponent } from './new/Ranger-new.component';
import { RangerDetailComponent } from './detail/Ranger-detail.component';

const routes: Routes = [
  {path: '', component: RangerHomeComponent},
  { path: 'new', component: RangerNewComponent },
  { path: ':id', component: RangerDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Ranger-detail-permissions'
      }
    }
  },{
    path: ':ranger_id/RangerPatrol', loadChildren: () => import('../RangerPatrol/RangerPatrol.module').then(m => m.RangerPatrolModule),
    data: {
        oPermission: {
            permissionId: 'RangerPatrol-detail-permissions'
        }
    }
}
];

export const RANGER_MODULE_DECLARATIONS = [
    RangerHomeComponent,
    RangerNewComponent,
    RangerDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RangerRoutingModule { }