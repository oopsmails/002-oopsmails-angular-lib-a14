import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UsCity, UsState } from '../models';
import * as i0 from "@angular/core";
export declare class StateService {
    private httpClient;
    errorMessage?: string;
    statesWithFlag$: Observable<UsState[]>;
    constructor(httpClient: HttpClient);
    getUsStates(): Observable<UsState[]>;
    searchUsStates(term: string): Observable<UsState[]>;
    getUsStateCityFromTs(): Observable<[string, any][]>;
    getUsStateCityData(): Observable<[string, any][]>;
    getUsStateCity(): Observable<UsState[]>;
    getUsStateCitySlice(indexes: number[]): Observable<UsState[]>;
    getUsCities(): Observable<UsCity[]>;
    makeUsState(idx: number, stateName: string): UsState;
    makeUsCity(idx: number, cityName: string): UsCity;
    makeUsCityWithStateName(idx: number, cityName: string, stateName: string): UsCity;
    static ɵfac: i0.ɵɵFactoryDeclaration<StateService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<StateService>;
}
