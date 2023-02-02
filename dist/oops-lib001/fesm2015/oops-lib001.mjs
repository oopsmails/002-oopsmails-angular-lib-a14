import * as i0 from '@angular/core';
import { Injectable, Component, NgModule } from '@angular/core';

class OopsLib001Service {
    constructor() { }
    doSomething() {
        console.log('Testing lib, if you see this, then OopsLib001Service is working! Test branch!');
    }
}
OopsLib001Service.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: OopsLib001Service, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
OopsLib001Service.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: OopsLib001Service, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: OopsLib001Service, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: function () { return []; } });

class OopsLib001Component {
    constructor() { }
    ngOnInit() {
        console.log('Testing lib, if you see this, then OopsLib001Component is working!');
    }
}
OopsLib001Component.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: OopsLib001Component, deps: [], target: i0.ɵɵFactoryTarget.Component });
OopsLib001Component.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.12", type: OopsLib001Component, selector: "oopslib001-oops-lib001", ngImport: i0, template: ` <p>oopslib001-oops-lib001 test works!</p> `, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: OopsLib001Component, decorators: [{
            type: Component,
            args: [{ selector: 'oopslib001-oops-lib001', template: ` <p>oopslib001-oops-lib001 test works!</p> ` }]
        }], ctorParameters: function () { return []; } });

class OopsLib001Module {
}
OopsLib001Module.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: OopsLib001Module, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
OopsLib001Module.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.2.12", ngImport: i0, type: OopsLib001Module, declarations: [OopsLib001Component], exports: [OopsLib001Component] });
OopsLib001Module.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: OopsLib001Module, providers: [OopsLib001Service] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: OopsLib001Module, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [OopsLib001Component],
                    imports: [],
                    exports: [OopsLib001Component],
                    providers: [OopsLib001Service],
                }]
        }] });

/*
 * Public API Surface of oops-lib001
 */

/**
 * Generated bundle index. Do not edit.
 */

export { OopsLib001Component, OopsLib001Module, OopsLib001Service };
//# sourceMappingURL=oops-lib001.mjs.map
