import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, map, tap, catchError } from 'rxjs';
import { STATE_WITH_FLAG_DATA } from '../data/statesWithFlag.data';
import { US_STATE_WITH_CITIES } from '../data/usStateWithCities.data';
import { UsCity, UsState } from '../models';

@Injectable({
  providedIn: 'root',
})
export class StateService {
  errorMessage?: string;
  statesWithFlag$: Observable<UsState[]>;
  constructor(private httpClient: HttpClient) {
    // this.statesWithFlag$ = this.httpClient //
    //   .get('assets/mockdata/statesWithFlag.json') as Observable<UsState[]>; // angular support asset in lib since v9
    // .get('../data/statesWithFlag.json') as Observable<UsState[]>;
    this.getUsStates();
  }

  getUsStates(): Observable<UsState[]> {
    // return this.statesWithFlag$;
    return this.httpClient.get('assets/mockdata/statesWithFlag.json').pipe(
      map((data) => {
        console.log('oops-lib002, StateService, getUsStates from statesWithFlag.json');
        return data as UsState[];
      }),
      catchError((err) => {
        console.log('oops-lib002, StateService, json file not exist? OK, will get from data.ts!');
        console.error(err);
        console.log('oops-lib002, StateService, getUsStateCityData from usStateWithCities.data.ts');
        return of(STATE_WITH_FLAG_DATA);
      })
    );
  }

  searchUsStates(term: string): Observable<UsState[]> {
    console.log('searchStates ....', term);
    if (term === '') {
      return of([]);
    }
    return this.getUsStates().pipe(
      map((items: UsState[]) => {
        return (
          items.filter((item: UsState) => {
            // console.log('searchState ...', term, item.name.toLowerCase().indexOf(term.toLowerCase()));
            return item.stateName.toLowerCase().indexOf(term.toLowerCase()) >= 0;
          }) || []
        );
      }),
      tap((items) => console.log('search result.size: ', (items && items.length) || '0'))
      // tap((items) => console.log('search result.size: ', items))
    );
  }

  getUsStateCityFromTs(): Observable<[string, any][]> {
    return of(US_STATE_WITH_CITIES);
  }

  getUsStateCityData(): Observable<[string, any][]> {
    return this.httpClient.get('assets/mockdata/cities.json').pipe(
      map((data) => {
        console.log('oops-lib002, StateService, getUsStateCityData from cities.json');
        return Object.entries(data).sort();
      }),
      catchError((err) => {
        console.log('oops-lib002, StateService, json file not exist? OK, will get from data.ts!');
        console.warn(err);
        console.log('oops-lib002, StateService, getUsStateCityData from usStateWithCities.data.ts');
        return of(US_STATE_WITH_CITIES);
      })
    );
  }

  getUsStateCity(): Observable<UsState[]> {
    return this.getUsStateCityData().pipe(
      // return this.httpClient.get('assets/mockdata/cities.json').pipe(
      // return this.httpClient.get('../data/cities.json').pipe( // angular support asset in lib since v9
      map((data) => {
        let statesData: [string, any][];
        let states: UsState[] = [];
        // console.log('Loading states and cities ..... ', data);
        if (data) {
          statesData = Object.entries(data).sort();

          let sIdx = 0;
          statesData.forEach((stateData) => {
            // console.log(`stateData[0]: `, stateData[0]);
            // console.log(`stateData[1]: `, stateData[1]);
            const state = this.makeUsState(sIdx, stateData[0]);
            sIdx++;

            let cIdx = 0;
            stateData[1].sort().forEach((cityData) => {
              const city = this.makeUsCityWithStateName(cIdx, cityData, state.stateName);
              cIdx++;
              state.cities.push(city);
            });
            states.push(state);
          });
        }
        // console.log(`StateService, getUsStateCity, states: `, states);
        console.log('StateService, getUsStateCity result.size: ', (states && states.length) || '0');
        return states;
      })
    );
  }

  getUsStateCitySlice(indexes: number[]): Observable<UsState[]> {
    return this.getUsStateCity().pipe(
      map((items: UsState[]) => {
        const result = [];
        items.forEach((item: UsState) => {
          if (indexes.includes(item.id)) {
            result.push(item);
          }
        });
        return result;
      })
    );
  }

  getUsCities() {
    let cities: UsCity[] = [];
    let retCities: UsCity[] = [];
    return this.getUsStateCity().pipe(
      map((states) => {
        // console.log(`states: `, states);
        states.forEach((state) => {
          state.cities.forEach((cityData) => {
            // console.log(`cityData: `, cityData);
            const newCity = this.makeUsCityWithStateName(
              0,
              cityData.cityName,
              cityData.inStateName
            );
            cities.push(cityData);
          });
        });

        cities.sort((a, b) => a.cityName.localeCompare(b.cityName));
        let cIdx = 0;
        cities.forEach((city) => {
          const newCity = this.makeUsCityWithStateName(cIdx, city.cityName, city.inStateName);
          cIdx++;
          retCities.push(newCity);
        });
        console.log(`Num of cities: `, retCities.length);
        return retCities;
      })
    );
  }

  makeUsState(idx: number, stateName: string): UsState {
    const state: UsState = {} as UsState;
    state.id = idx;
    state.stateName = stateName;
    state.cities = [];

    return state;
  }

  makeUsCity(idx: number, cityName: string): UsCity {
    const city: UsCity = {} as UsCity;
    city.id = idx;
    city.cityName = cityName;

    return city;
  }

  makeUsCityWithStateName(idx: number, cityName: string, stateName: string): UsCity {
    const city: UsCity = this.makeUsCity(idx, cityName);
    city.inStateName = stateName;
    return city;
  }
}
