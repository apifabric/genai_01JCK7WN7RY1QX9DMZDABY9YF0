import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IllegalActivityHomeComponent } from './home/IllegalActivity-home.component';
import { IllegalActivityNewComponent } from './new/IllegalActivity-new.component';
import { IllegalActivityDetailComponent } from './detail/IllegalActivity-detail.component';

const routes: Routes = [
  {path: '', component: IllegalActivityHomeComponent},
  { path: 'new', component: IllegalActivityNewComponent },
  { path: ':id', component: IllegalActivityDetailComponent,
    data: {
      oPermission: {
        permissionId: 'IllegalActivity-detail-permissions'
      }
    }
  }
];

export const ILLEGALACTIVITY_MODULE_DECLARATIONS = [
    IllegalActivityHomeComponent,
    IllegalActivityNewComponent,
    IllegalActivityDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IllegalActivityRoutingModule { }