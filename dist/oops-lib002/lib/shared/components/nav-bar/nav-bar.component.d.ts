import { AfterViewInit, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NavBarModel } from '../../models/shared.model';
import { SharedDataService } from '../../services/shared.data.service';
import * as i0 from "@angular/core";
export declare class NavBarComponent implements OnInit, AfterViewInit, OnDestroy {
    private sharedDataService;
    navbarElementRef: ElementRef;
    menubarElementRef: ElementRef;
    private onDestroy$;
    navBarConfig$: Observable<NavBarModel[]>;
    constructor(sharedDataService: SharedDataService);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NavBarComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NavBarComponent, "nav-bar-example", never, {}, {}, never, never, false>;
}
