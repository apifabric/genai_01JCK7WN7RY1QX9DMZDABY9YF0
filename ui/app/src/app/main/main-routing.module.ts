import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main.component';

export const routes: Routes = [
  {
    path: '', component: MainComponent,
    children: [
        { path: '', redirectTo: 'home', pathMatch: 'full' },
        { path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) },
        { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
        { path: 'settings', loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule) },
      
    
        { path: 'Animal', loadChildren: () => import('./Animal/Animal.module').then(m => m.AnimalModule) },
    
        { path: 'ConservationProject', loadChildren: () => import('./ConservationProject/ConservationProject.module').then(m => m.ConservationProjectModule) },
    
        { path: 'EndangeredSpeciesList', loadChildren: () => import('./EndangeredSpeciesList/EndangeredSpeciesList.module').then(m => m.EndangeredSpeciesListModule) },
    
        { path: 'Habitat', loadChildren: () => import('./Habitat/Habitat.module').then(m => m.HabitatModule) },
    
        { path: 'IllegalActivity', loadChildren: () => import('./IllegalActivity/IllegalActivity.module').then(m => m.IllegalActivityModule) },
    
        { path: 'PatrolIncident', loadChildren: () => import('./PatrolIncident/PatrolIncident.module').then(m => m.PatrolIncidentModule) },
    
        { path: 'Plant', loadChildren: () => import('./Plant/Plant.module').then(m => m.PlantModule) },
    
        { path: 'Ranger', loadChildren: () => import('./Ranger/Ranger.module').then(m => m.RangerModule) },
    
        { path: 'RangerPatrol', loadChildren: () => import('./RangerPatrol/RangerPatrol.module').then(m => m.RangerPatrolModule) },
    
        { path: 'ResearchStudy', loadChildren: () => import('./ResearchStudy/ResearchStudy.module').then(m => m.ResearchStudyModule) },
    
        { path: 'Researcher', loadChildren: () => import('./Researcher/Researcher.module').then(m => m.ResearcherModule) },
    
        { path: 'ResearcherStudyLink', loadChildren: () => import('./ResearcherStudyLink/ResearcherStudyLink.module').then(m => m.ResearcherStudyLinkModule) },
    
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }