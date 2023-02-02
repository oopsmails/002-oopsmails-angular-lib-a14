import { HttpClient } from '@angular/common/http';
import { OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { NavBarModel, RandomItem, RsSearchResult } from '../models';
import * as i0 from "@angular/core";
export declare class SharedDataService implements OnDestroy {
    private httpClient;
    TIMER_REFRESH: number;
    private onDestroy$;
    private _itemData$;
    private timer$;
    defaultRandomItemSearchRs: RsSearchResult<RandomItem>;
    constructor(httpClient: HttpClient);
    dataSource$: Observable<RandomItem[]>;
    itemReplay$: Observable<RandomItem[]>;
    updateData(): void;
    getRandomItems(numOfItems?: number, delayInMs?: number): Observable<RandomItem[]>;
    searchRandomItems(searchText: string): Observable<RsSearchResult<RandomItem>>;
    makeMockRandomItems(numOfItems?: number): RandomItem[];
    getNavBarConfig(): Observable<NavBarModel[]>;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SharedDataService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SharedDataService>;
}
