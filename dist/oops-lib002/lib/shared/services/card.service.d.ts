import { OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { Card } from '../models/shared.model';
import * as i0 from "@angular/core";
export declare class CardDataService implements OnDestroy {
    cards: Card[];
    private onDestroy$;
    constructor();
    getCards(): Observable<Card[]>;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CardDataService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<CardDataService>;
}
