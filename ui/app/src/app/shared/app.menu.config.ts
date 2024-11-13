import { MenuRootItem } from 'ontimize-web-ngx';

import { AnimalCardComponent } from './Animal-card/Animal-card.component';

import { ConservationProjectCardComponent } from './ConservationProject-card/ConservationProject-card.component';

import { EndangeredSpeciesListCardComponent } from './EndangeredSpeciesList-card/EndangeredSpeciesList-card.component';

import { HabitatCardComponent } from './Habitat-card/Habitat-card.component';

import { IllegalActivityCardComponent } from './IllegalActivity-card/IllegalActivity-card.component';

import { PatrolIncidentCardComponent } from './PatrolIncident-card/PatrolIncident-card.component';

import { PlantCardComponent } from './Plant-card/Plant-card.component';

import { RangerCardComponent } from './Ranger-card/Ranger-card.component';

import { RangerPatrolCardComponent } from './RangerPatrol-card/RangerPatrol-card.component';

import { ResearchStudyCardComponent } from './ResearchStudy-card/ResearchStudy-card.component';

import { ResearcherCardComponent } from './Researcher-card/Researcher-card.component';

import { ResearcherStudyLinkCardComponent } from './ResearcherStudyLink-card/ResearcherStudyLink-card.component';


export const MENU_CONFIG: MenuRootItem[] = [
    { id: 'home', name: 'HOME', icon: 'home', route: '/main/home' },
    
    {
    id: 'data', name: ' data', icon: 'remove_red_eye', opened: true,
    items: [
    
        { id: 'Animal', name: 'ANIMAL', icon: 'view_list', route: '/main/Animal' }
    
        ,{ id: 'ConservationProject', name: 'CONSERVATIONPROJECT', icon: 'view_list', route: '/main/ConservationProject' }
    
        ,{ id: 'EndangeredSpeciesList', name: 'ENDANGEREDSPECIESLIST', icon: 'view_list', route: '/main/EndangeredSpeciesList' }
    
        ,{ id: 'Habitat', name: 'HABITAT', icon: 'view_list', route: '/main/Habitat' }
    
        ,{ id: 'IllegalActivity', name: 'ILLEGALACTIVITY', icon: 'view_list', route: '/main/IllegalActivity' }
    
        ,{ id: 'PatrolIncident', name: 'PATROLINCIDENT', icon: 'view_list', route: '/main/PatrolIncident' }
    
        ,{ id: 'Plant', name: 'PLANT', icon: 'view_list', route: '/main/Plant' }
    
        ,{ id: 'Ranger', name: 'RANGER', icon: 'view_list', route: '/main/Ranger' }
    
        ,{ id: 'RangerPatrol', name: 'RANGERPATROL', icon: 'view_list', route: '/main/RangerPatrol' }
    
        ,{ id: 'ResearchStudy', name: 'RESEARCHSTUDY', icon: 'view_list', route: '/main/ResearchStudy' }
    
        ,{ id: 'Researcher', name: 'RESEARCHER', icon: 'view_list', route: '/main/Researcher' }
    
        ,{ id: 'ResearcherStudyLink', name: 'RESEARCHERSTUDYLINK', icon: 'view_list', route: '/main/ResearcherStudyLink' }
    
    ] 
},
    
    { id: 'settings', name: 'Settings', icon: 'settings', route: '/main/settings'}
    ,{ id: 'about', name: 'About', icon: 'info', route: '/main/about'}
    ,{ id: 'logout', name: 'LOGOUT', route: '/login', icon: 'power_settings_new', confirm: 'yes' }
];

export const MENU_COMPONENTS = [

    AnimalCardComponent

    ,ConservationProjectCardComponent

    ,EndangeredSpeciesListCardComponent

    ,HabitatCardComponent

    ,IllegalActivityCardComponent

    ,PatrolIncidentCardComponent

    ,PlantCardComponent

    ,RangerCardComponent

    ,RangerPatrolCardComponent

    ,ResearchStudyCardComponent

    ,ResearcherCardComponent

    ,ResearcherStudyLinkCardComponent

];