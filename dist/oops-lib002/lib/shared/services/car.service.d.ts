import { Observable } from 'rxjs';
import { Car, CarGroup } from '../models';
import * as i0 from "@angular/core";
export declare class CarDataService {
    private indexSeed;
    private brand;
    private model;
    private years;
    dataSource$: Observable<Car[]>;
    getCarItems(numOfItems?: number, delayInMs?: number): Observable<Car[]>;
    getSortedCarItems(items: Car[], compareFn?: (a: Car, b: Car) => number): Car[];
    makeMockItems(numOfItems?: number): Car[];
    getCarGroupsByBrand(cars: Car[], sort?: boolean): CarGroup[];
    getCarItemsGroupByBrand(cars: Car[]): Car[];
    static ɵfac: i0.ɵɵFactoryDeclaration<CarDataService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<CarDataService>;
}
