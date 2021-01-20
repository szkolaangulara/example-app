import {RouterModule, Routes} from '@angular/router';
import {CarsDashboardComponent} from './cars-dashboard/cars-dashboard.component';

export const routes: Routes = [
    {
        path: '',
        component: CarsDashboardComponent,
    }
];

export const CarDashboardRouting = RouterModule.forChild(routes);
