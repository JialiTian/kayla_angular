import { Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/index';
import { PlannerComponent } from './planner/index';
import { AuthenticationGuard } from './services/authentication/index';

export const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    canActivate: [AuthenticationGuard]
  },
  { 
    path: 'planner', 
    component: PlannerComponent,
    canActivate: [AuthenticationGuard]
  },
  // { path: '**', component: PageNotFoundComponent }
];
