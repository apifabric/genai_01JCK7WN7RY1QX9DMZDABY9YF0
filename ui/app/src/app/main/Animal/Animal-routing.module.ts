import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimalHomeComponent } from './home/Animal-home.component';
import { AnimalNewComponent } from './new/Animal-new.component';
import { AnimalDetailComponent } from './detail/Animal-detail.component';

const routes: Routes = [
  {path: '', component: AnimalHomeComponent},
  { path: 'new', component: AnimalNewComponent },
  { path: ':id', component: AnimalDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Animal-detail-permissions'
      }
    }
  },{
    path: ':species_target_id/ConservationProject', loadChildren: () => import('../ConservationProject/ConservationProject.module').then(m => m.ConservationProjectModule),
    data: {
        oPermission: {
            permissionId: 'ConservationProject-detail-permissions'
        }
    }
},{
    path: ':species_id/EndangeredSpeciesList', loadChildren: () => import('../EndangeredSpeciesList/EndangeredSpeciesList.module').then(m => m.EndangeredSpeciesListModule),
    data: {
        oPermission: {
            permissionId: 'EndangeredSpeciesList-detail-permissions'
        }
    }
},{
    path: ':involved_species_id/IllegalActivity', loadChildren: () => import('../IllegalActivity/IllegalActivity.module').then(m => m.IllegalActivityModule),
    data: {
        oPermission: {
            permissionId: 'IllegalActivity-detail-permissions'
        }
    }
}
];

export const ANIMAL_MODULE_DECLARATIONS = [
    AnimalHomeComponent,
    AnimalNewComponent,
    AnimalDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnimalRoutingModule { }