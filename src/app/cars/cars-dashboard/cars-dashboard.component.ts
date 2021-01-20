import { Component, OnInit } from '@angular/core';
import {Car} from '../interfaces/car.interface';
import {CarService} from '../car.service';
import {catchError} from 'rxjs/operators';
import {combineLatest, of} from 'rxjs';
import {CarModel} from '../interfaces/car.model';
import {CarType} from '../car.type';
import {DestroyableComponent} from '../../shared/destroyable.component';

@Component({
  selector: 'app-cars-dashboard',
  templateUrl: './cars-dashboard.component.html',
  styleUrls: ['./cars-dashboard.component.css']
})
export class CarsDashboardComponent extends DestroyableComponent implements OnInit {
  public cars: Car[] = [];

  constructor(private carService: CarService) {
    super();
  }

  public ngOnInit(): void {
    this.handleCars();
  }

  public handleCars(): void {
    const cars$ = this.carService.fetchCars()
        .pipe(catchError(() => of([])));

    const topCars$ = this.carService.fetchTopCars()
        .pipe(catchError(() => of([])));

    const bestCars$ = this.carService.fetchBestCars()
        .pipe(catchError(() => of([])));


    combineLatest([cars$, topCars$, bestCars$])
        .subscribe(([dashboardCars, topCars, bestCars]) => {
          this.cars = [
            ...new CarModel(dashboardCars, CarType.CAR).cars,
            ...new CarModel(bestCars, CarType.CAR_BEST).cars,
            ...new CarModel(topCars, CarType.CAR_TOP).cars
          ];
        })
  }

}
