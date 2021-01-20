import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpService} from '../shared/http/http.service';
import {fetchBestCars, fetchCars, fetchTopCars} from './cars-request-config.helper';
import {CarTop} from './interfaces/car-top.interface';
import {CarBest} from './interfaces/car-best.interface';
import {Car} from './interfaces/car.interface';

@Injectable()
export class CarService {
    constructor(private httpService: HttpService) {
    }

    public fetchTopCars(): Observable<CarTop[]> {
        return this.httpService.request<CarTop[]>(fetchTopCars());
    }

    public fetchBestCars(): Observable<CarBest[]> {
        return this.httpService.request<CarBest[]>(fetchBestCars());
    }

    public fetchCars(): Observable<Car[]> {
        return this.httpService.request<Car[]>(fetchCars());
    }
}
