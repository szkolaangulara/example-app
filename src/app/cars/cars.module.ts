import {NgModule} from '@angular/core';
import {CarsDashboardComponent} from './cars-dashboard/cars-dashboard.component';
import {CarDashboardRouting} from './cars-dashboard.routing';
import {CardComponent} from './card/card.component';
import {CommonModule} from '@angular/common';
import {CarService} from './car.service';

@NgModule({
    imports: [CarDashboardRouting, CommonModule],
    declarations: [CarsDashboardComponent, CardComponent],
    providers: [CarService],
})
export class CarDashboardModule {
}
