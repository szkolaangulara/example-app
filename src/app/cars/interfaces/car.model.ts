import {Car} from './car.interface';
import {CarBest} from './car-best.interface';
import {CarTop} from './car-top.interface';
import {CarType} from '../car.type';

export class CarModel {

    public cars: Car[] = [];

    constructor(cars?: Car[] | CarBest[] | CarTop[], carType?: CarType) {
        if (carType === CarType.CAR) {
            this.handleOrdinaryCars(cars as Car[]);
        } else if (carType === CarType.CAR_BEST) {
            this.handleBestCars(cars as CarBest[])
        } else if (carType === CarType.CAR_TOP) {
            this.handleTopCars(cars as CarTop[])
        }
    }


    private handleOrdinaryCars(cars: Car[]): void {
        cars.forEach((car: Car) => this.cars.push(
            {
                brand: car.brand,
                model: car.model,
                price: car.price,
                photoSource: car.photoSource
            }
        ))
    }


    private handleBestCars(cars: CarBest[]): void {
        cars.forEach((car: CarBest) => this.cars.push(
            {
                brand: car.carBrand,
                model: car.carModel,
                price: car.carPrice,
                photoSource: car.carPhoto
            }
        ))
    }


    private handleTopCars(cars: CarTop[]): void {
        cars.forEach((car: CarTop) => this.cars.push(
            {
                brand: car.topMarka,
                model: car.topModel,
                price: car.topCena,
                photoSource: car.topZdjecie
            }
        ))
    }
}
