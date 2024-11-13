import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConservationProjectHomeComponent } from './home/ConservationProject-home.component';
import { ConservationProjectNewComponent } from './new/ConservationProject-new.component';
import { ConservationProjectDetailComponent } from './detail/ConservationProject-detail.component';

const routes: Routes = [
  {path: '', component: ConservationProjectHomeComponent},
  { path: 'new', component: ConservationProjectNewComponent },
  { path: ':id', component: ConservationProjectDetailComponent,
    data: {
      oPermission: {
        permissionId: 'ConservationProject-detail-permissions'
      }
    }
  }
];

export const CONSERVATIONPROJECT_MODULE_DECLARATIONS = [
    ConservationProjectHomeComponent,
    ConservationProjectNewComponent,
    ConservationProjectDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConservationProjectRoutingModule { }