import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EndangeredSpeciesListHomeComponent } from './home/EndangeredSpeciesList-home.component';
import { EndangeredSpeciesListNewComponent } from './new/EndangeredSpeciesList-new.component';
import { EndangeredSpeciesListDetailComponent } from './detail/EndangeredSpeciesList-detail.component';

const routes: Routes = [
  {path: '', component: EndangeredSpeciesListHomeComponent},
  { path: 'new', component: EndangeredSpeciesListNewComponent },
  { path: ':id', component: EndangeredSpeciesListDetailComponent,
    data: {
      oPermission: {
        permissionId: 'EndangeredSpeciesList-detail-permissions'
      }
    }
  }
];

export const ENDANGEREDSPECIESLIST_MODULE_DECLARATIONS = [
    EndangeredSpeciesListHomeComponent,
    EndangeredSpeciesListNewComponent,
    EndangeredSpeciesListDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EndangeredSpeciesListRoutingModule { }