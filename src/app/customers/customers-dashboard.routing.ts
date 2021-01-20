import {RouterModule, Routes} from '@angular/router';
import {CustomersDashboardComponent} from './customers-dashboard/customers-dashboard.component';

export const routes: Routes = [
    {
        path: '',
        component: CustomersDashboardComponent,
    }
];

export const CustomersDashboardRouting = RouterModule.forChild(routes);
