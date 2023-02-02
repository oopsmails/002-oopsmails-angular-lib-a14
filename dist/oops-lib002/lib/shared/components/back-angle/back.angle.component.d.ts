import { OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as i0 from "@angular/core";
export declare class BackAngleComponent implements OnInit {
    private route;
    private router;
    routerLinkInput: string;
    linkText: string;
    constructor(route: ActivatedRoute, router: Router);
    ngOnInit(): void;
    navTo(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BackAngleComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BackAngleComponent, "app-back-angle", never, { "routerLinkInput": "routerLinkInput"; "linkText": "linkText"; }, {}, never, never, false>;
}
