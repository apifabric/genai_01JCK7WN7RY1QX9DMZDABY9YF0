import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HabitatHomeComponent } from './home/Habitat-home.component';
import { HabitatNewComponent } from './new/Habitat-new.component';
import { HabitatDetailComponent } from './detail/Habitat-detail.component';

const routes: Routes = [
  {path: '', component: HabitatHomeComponent},
  { path: 'new', component: HabitatNewComponent },
  { path: ':id', component: HabitatDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Habitat-detail-permissions'
      }
    }
  },{
    path: ':habitat_id/Animal', loadChildren: () => import('../Animal/Animal.module').then(m => m.AnimalModule),
    data: {
        oPermission: {
            permissionId: 'Animal-detail-permissions'
        }
    }
},{
    path: ':habitat_id/Plant', loadChildren: () => import('../Plant/Plant.module').then(m => m.PlantModule),
    data: {
        oPermission: {
            permissionId: 'Plant-detail-permissions'
        }
    }
}
];

export const HABITAT_MODULE_DECLARATIONS = [
    HabitatHomeComponent,
    HabitatNewComponent,
    HabitatDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HabitatRoutingModule { }