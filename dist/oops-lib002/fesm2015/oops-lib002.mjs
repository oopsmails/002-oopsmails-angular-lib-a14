import * as i0 from '@angular/core';
import { Injectable, Component, Input, ViewChild, Directive, HostListener, Pipe, NgModule } from '@angular/core';
import * as i2 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i1$1 from '@angular/common/http';
import { HttpParams, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import * as i1 from '@angular/router';
import { RouterModule } from '@angular/router';
import { Subject, BehaviorSubject, timer, takeUntil, take, switchMap, shareReplay, of, delay, tap, fromEvent, map, catchError } from 'rxjs';
import { map as map$1 } from 'rxjs/operators';

class OopsLib002Service {
    constructor() { }
    doSomething() {
        console.log('Testing lib, if you see this, then OopsLib002Service is working!');
    }
}
OopsLib002Service.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: OopsLib002Service, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
OopsLib002Service.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: OopsLib002Service, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: OopsLib002Service, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: function () { return []; } });

class OopsLib002Component {
    constructor() { }
    ngOnInit() { }
}
OopsLib002Component.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: OopsLib002Component, deps: [], target: i0.ɵɵFactoryTarget.Component });
OopsLib002Component.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.12", type: OopsLib002Component, selector: "oopslib002-oops-lib002", ngImport: i0, template: ` <p>oops-lib002 works!</p> `, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: OopsLib002Component, decorators: [{
            type: Component,
            args: [{ selector: 'oopslib002-oops-lib002', template: ` <p>oops-lib002 works!</p> ` }]
        }], ctorParameters: function () { return []; } });

class BackAngleComponent {
    constructor(route, router) {
        this.route = route;
        this.router = router;
        this.routerLinkInput = '/home';
        this.linkText = 'Back to Home';
    }
    ngOnInit() { }
    navTo() {
        console.log(this.routerLinkInput, this.linkText);
        this.router.navigate([this.routerLinkInput], { relativeTo: this.route });
    }
}
BackAngleComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: BackAngleComponent, deps: [{ token: i1.ActivatedRoute }, { token: i1.Router }], target: i0.ɵɵFactoryTarget.Component });
BackAngleComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.12", type: BackAngleComponent, selector: "app-back-angle", inputs: { routerLinkInput: "routerLinkInput", linkText: "linkText" }, ngImport: i0, template: "<div class=\"backDiv\">\r\n  <a (click)=\"navTo()\">\r\n    <!-- <fa-icon [icon]=\"faAngleLeft\" class=\"faIconAngleLeft\"></fa-icon>{{ linkText }} -->\r\n    <i class=\"arrow left\"></i>&nbsp;{{ linkText }}\r\n  </a>\r\n</div>\r\n", styles: [".backDiv{padding:10px 0;text-decoration:underline}.backDiv:hover{cursor:pointer}.arrow{border:solid black;border-width:0 3px 3px 0;display:inline-block;padding:3px}.right{transform:rotate(-45deg);-webkit-transform:rotate(-45deg)}.left{transform:rotate(135deg);-webkit-transform:rotate(135deg)}.up{transform:rotate(-135deg);-webkit-transform:rotate(-135deg)}.down{transform:rotate(45deg);-webkit-transform:rotate(45deg)}\n"] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: BackAngleComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-back-angle', template: "<div class=\"backDiv\">\r\n  <a (click)=\"navTo()\">\r\n    <!-- <fa-icon [icon]=\"faAngleLeft\" class=\"faIconAngleLeft\"></fa-icon>{{ linkText }} -->\r\n    <i class=\"arrow left\"></i>&nbsp;{{ linkText }}\r\n  </a>\r\n</div>\r\n", styles: [".backDiv{padding:10px 0;text-decoration:underline}.backDiv:hover{cursor:pointer}.arrow{border:solid black;border-width:0 3px 3px 0;display:inline-block;padding:3px}.right{transform:rotate(-45deg);-webkit-transform:rotate(-45deg)}.left{transform:rotate(135deg);-webkit-transform:rotate(135deg)}.up{transform:rotate(-135deg);-webkit-transform:rotate(-135deg)}.down{transform:rotate(45deg);-webkit-transform:rotate(45deg)}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.ActivatedRoute }, { type: i1.Router }]; }, propDecorators: { routerLinkInput: [{
                type: Input
            }], linkText: [{
                type: Input
            }] } });

class FooterComponent {
    constructor() { }
    ngOnInit() { }
}
FooterComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: FooterComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
FooterComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.12", type: FooterComponent, selector: "app-footer", ngImport: i0, template: "<hr />\r\n<!-- <p><a routerLink=\"\">routerLink home</a></p> -->\r\n<footer class=\"footer\">\r\n  <p>&copy; Copyright 2022. All rights reserved.</p>\r\n</footer>\r\n", styles: [".footer{position:relative;right:0;bottom:0;left:0;padding:1rem;text-align:center}\n"] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: FooterComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-footer', template: "<hr />\r\n<!-- <p><a routerLink=\"\">routerLink home</a></p> -->\r\n<footer class=\"footer\">\r\n  <p>&copy; Copyright 2022. All rights reserved.</p>\r\n</footer>\r\n", styles: [".footer{position:relative;right:0;bottom:0;left:0;padding:1rem;text-align:center}\n"] }]
        }], ctorParameters: function () { return []; } });

class SharedDataService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.TIMER_REFRESH = 1 * 60 * 60 * 1000;
        this.onDestroy$ = new Subject();
        this._itemData$ = new BehaviorSubject(undefined);
        this.timer$ = timer(this.TIMER_REFRESH, this.TIMER_REFRESH).pipe(takeUntil(this.onDestroy$));
        this.defaultRandomItemSearchRs = {
            resultList: [
                {
                    id: -1,
                    name: '',
                    desc: '',
                    text: '',
                    price: -1,
                    imageUrl: '',
                    quantity: -1,
                },
            ],
        };
        this.dataSource$ = this.getRandomItems(50).pipe(take(1));
        this.itemReplay$ = this._itemData$.pipe(switchMap((resp) => this.dataSource$), 
        // switchMapTo(this.dataSource$),
        shareReplay(1));
        this.timer$.subscribe((x) => this.updateData());
    }
    updateData() {
        this._itemData$.next(undefined);
    }
    getRandomItems(numOfItems, delayInMs) {
        const items = this.makeMockRandomItems(numOfItems);
        if (!delayInMs) {
            return of(items);
        }
        return of(items).pipe(delay(delayInMs));
    }
    searchRandomItems(searchText) {
        if (!searchText || searchText === '' || searchText.length < 1) {
            return of(this.defaultRandomItemSearchRs);
        }
        // if 30000, then browser freezing when rendering search result items because too many
        const items = this.makeMockRandomItems(300).filter((item) => item.name.includes(searchText));
        const result = { resultList: items };
        return of(result).pipe(tap((resp) => console.log('searchText: ', searchText, 'returning: ', resp.resultList.length)), delay(2000));
    }
    makeMockRandomItems(numOfItems) {
        if (!numOfItems) {
            numOfItems = 20;
        }
        const items = [];
        for (let i = 0; i < numOfItems; i++) {
            items.push({
                id: i,
                name: 'randomItem name ' + i,
                desc: 'randomItem desc ' + i,
                text: 'randomItem text ' + i,
                price: i,
                imageUrl: 'randomItem imageUrl ' + i,
                quantity: i,
            });
        }
        return items;
    }
    getNavBarConfig() {
        return this.httpClient.get('assets/config/nav-bar-config.json').pipe(tap((items) => console.log('getNavBarConfig result.size: ', (items && items.length) || '0')));
    }
    ngOnDestroy() {
        this.onDestroy$.next(true);
        this.onDestroy$.complete();
    }
}
SharedDataService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: SharedDataService, deps: [{ token: i1$1.HttpClient }], target: i0.ɵɵFactoryTarget.Injectable });
SharedDataService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: SharedDataService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: SharedDataService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: function () { return [{ type: i1$1.HttpClient }]; } });

class NavBarComponent {
    constructor(sharedDataService) {
        this.sharedDataService = sharedDataService;
        this.onDestroy$ = new Subject();
    }
    ngOnInit() {
        this.navBarConfig$ = this.sharedDataService.getNavBarConfig();
        // this.sharedDataService
        //   .getNavBarConfig()
        //   .pipe(tap((res) => console.log(res)))
        //   .subscribe((res) => (this.navBarConfig = res));
    }
    ngAfterViewInit() {
        // this.navbarClick = fromEvent(this.navbarElementRef.nativeElement, 'click').subscribe(
        fromEvent(this.navbarElementRef.nativeElement, 'click')
            .pipe(takeUntil(this.onDestroy$))
            .subscribe((x) => {
            var _a;
            // console.log("NavbarFixedComponent, ngAfterViewInit ... ", x);
            (_a = this.menubarElementRef.nativeElement) === null || _a === void 0 ? void 0 : _a.click();
        });
    }
    ngOnDestroy() {
        this.onDestroy$.next(true);
        this.onDestroy$.complete();
    }
}
NavBarComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: NavBarComponent, deps: [{ token: SharedDataService }], target: i0.ɵɵFactoryTarget.Component });
NavBarComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.12", type: NavBarComponent, selector: "nav-bar-example", viewQueries: [{ propertyName: "navbarElementRef", first: true, predicate: ["navbar"], descendants: true }, { propertyName: "menubarElementRef", first: true, predicate: ["menubar"], descendants: true }], ngImport: i0, template: "<div class=\"header-div\">\r\n  <a routerLink=\"\" class=\"logo\">LOGO</a>\r\n\r\n  <input type=\"checkbox\" id=\"menu-bar\" #menubar />\r\n  <!-- <label for=\"menu-bar\">Menu</label> -->\r\n  <label for=\"menu-bar\" class=\"nav-toggle-label\">\r\n    <!-- <span>X</span> -->\r\n    <span></span>\r\n  </label>\r\n\r\n  <nav class=\"navbar\" #navbar>\r\n    <ul>\r\n      <li *ngFor=\"let item of navBarConfig$ | async; let i = index\">\r\n        <!-- <li *ngFor=\"let item of navBarConfig; let i = index\"> -->\r\n        <a *ngIf=\"!item.submenu.length\" routerLink=\"{{ item.parentLink }}\">{{ item.linkText }}</a>\r\n        <a *ngIf=\"item.submenu.length\">\r\n          {{ item.linkText | uppercase }}\r\n          <span class=\"nav-bar-arrow-down\"><i class=\"arrow down\"></i></span>\r\n        </a>\r\n        <ul>\r\n          <li *ngFor=\"let subItem of item.submenu\">\r\n            <a routerLink=\"{{ subItem.link }}\">{{ subItem.childtext }}</a>\r\n          </li>\r\n        </ul>\r\n      </li>\r\n      <!-- <li>\r\n        <a routerLink=\"/home\"\r\n          >Home\r\n          <span class=\"badge-num\"> 0 </span>\r\n        </a>\r\n      </li>\r\n      <li><a routerLink=\"/example/home\">Example</a></li>\r\n      <li><a routerLink=\"/store/home\">NgrxStore</a></li>\r\n      <li><a routerLink=\"/sandbox/home\">Sandbox</a></li>\r\n      <li>\r\n        <a>\r\n          GOTO\r\n          <span class=\"nav-bar-arrow-down\"><i class=\"arrow down\"></i></span>\r\n        </a>\r\n        <ul>\r\n          <li><a routerLink=\"sandbox/search-city\">Search City Filter</a></li>\r\n          <li><a routerLink=\"sandbox/search-plant\">Search Plant Filter</a></li>\r\n          <li><a routerLink=\"sandbox/us-state\">US States</a></li>\r\n          <li><a routerLink=\"sandbox/search-state\">Search US States</a></li>\r\n        </ul>\r\n      </li> -->\r\n    </ul>\r\n  </nav>\r\n</div>\r\n", styles: ["*{margin:0;padding:0;box-sizing:border-box;text-transform:capitalize;text-decoration:none}.header-div{position:fixed;z-index:1000;top:0;left:0;right:0;height:var(--nav-height);background:var(--primary-color);box-shadow:0 5px 10px #0000001a;padding:0 7%;display:flex;align-items:center;justify-content:space-between}.header-div .logo{font-weight:bolder;font-size:25px;color:#333}.header-div .navbar ul{list-style:none}.header-div .navbar ul li{position:relative;float:left}.header-div .navbar ul li a{font-size:20px;padding:20px;color:#333;display:block}.header-div .navbar ul li a:hover{background:#333;color:#fff}.header-div .navbar ul li a:hover .arrow{border:solid white;border-width:0 3px 3px 0}.header-div .navbar ul li ul{position:absolute;left:0;width:200px;background:#fff;display:none}.header-div .navbar ul li ul li{width:100%;border-top:1px solid rgba(0,0,0,.1)}.header-div .navbar ul li ul li a{font-size:16px;padding:10px;display:block}.header-div .navbar ul li ul li ul{left:200px;top:0}.header-div .navbar ul li:hover>ul{display:initial}#menu-bar{border:1px solid red;display:none}.nav-toggle-label{position:absolute;top:1.5em;right:0;margin-right:1em;height:100%;display:flex;align-items:center}.nav-toggle-label span,.nav-toggle-label span:before,.nav-toggle-label span:after{display:block;background:#333;height:2px;width:2em;border-radius:2px;position:relative}.nav-toggle-label span:before,.nav-toggle-label span:after{content:\"\";position:absolute}.nav-toggle-label span:before{bottom:7px}.nav-toggle-label span:after{top:7px}.header-div label{font-size:20px;color:#333;cursor:pointer;display:none}.nav-bar-arrow-down{padding-left:5px}@media (max-width: 830px){.header-div{padding:20px}.header-div label{display:initial}.header-div .navbar{position:absolute;top:100%;left:0;right:0;background:#fff;border-top:1px solid rgba(0,0,0,.1);display:none}.header-div .navbar ul li{width:100%}.header-div .navbar ul li ul{position:relative;width:100%}.header-div .navbar ul li ul li{background:#eee}.header-div .navbar ul li ul li ul{width:100%;left:0}#menu-bar:checked~.navbar{display:initial}}.arrow{border:solid black;border-width:0 3px 3px 0;display:inline-block;padding:4px}.right{transform:rotate(-45deg);-webkit-transform:rotate(-45deg)}.left{transform:rotate(135deg);-webkit-transform:rotate(135deg)}.up{transform:rotate(-135deg);-webkit-transform:rotate(-135deg)}.down{margin-bottom:4px;transform:rotate(45deg);-webkit-transform:rotate(45deg)}\n"], dependencies: [{ kind: "directive", type: i2.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1.RouterLinkWithHref, selector: "a[routerLink],area[routerLink]", inputs: ["target", "queryParams", "fragment", "queryParamsHandling", "state", "relativeTo", "preserveFragment", "skipLocationChange", "replaceUrl", "routerLink"] }, { kind: "pipe", type: i2.AsyncPipe, name: "async" }, { kind: "pipe", type: i2.UpperCasePipe, name: "uppercase" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: NavBarComponent, decorators: [{
            type: Component,
            args: [{ selector: 'nav-bar-example', template: "<div class=\"header-div\">\r\n  <a routerLink=\"\" class=\"logo\">LOGO</a>\r\n\r\n  <input type=\"checkbox\" id=\"menu-bar\" #menubar />\r\n  <!-- <label for=\"menu-bar\">Menu</label> -->\r\n  <label for=\"menu-bar\" class=\"nav-toggle-label\">\r\n    <!-- <span>X</span> -->\r\n    <span></span>\r\n  </label>\r\n\r\n  <nav class=\"navbar\" #navbar>\r\n    <ul>\r\n      <li *ngFor=\"let item of navBarConfig$ | async; let i = index\">\r\n        <!-- <li *ngFor=\"let item of navBarConfig; let i = index\"> -->\r\n        <a *ngIf=\"!item.submenu.length\" routerLink=\"{{ item.parentLink }}\">{{ item.linkText }}</a>\r\n        <a *ngIf=\"item.submenu.length\">\r\n          {{ item.linkText | uppercase }}\r\n          <span class=\"nav-bar-arrow-down\"><i class=\"arrow down\"></i></span>\r\n        </a>\r\n        <ul>\r\n          <li *ngFor=\"let subItem of item.submenu\">\r\n            <a routerLink=\"{{ subItem.link }}\">{{ subItem.childtext }}</a>\r\n          </li>\r\n        </ul>\r\n      </li>\r\n      <!-- <li>\r\n        <a routerLink=\"/home\"\r\n          >Home\r\n          <span class=\"badge-num\"> 0 </span>\r\n        </a>\r\n      </li>\r\n      <li><a routerLink=\"/example/home\">Example</a></li>\r\n      <li><a routerLink=\"/store/home\">NgrxStore</a></li>\r\n      <li><a routerLink=\"/sandbox/home\">Sandbox</a></li>\r\n      <li>\r\n        <a>\r\n          GOTO\r\n          <span class=\"nav-bar-arrow-down\"><i class=\"arrow down\"></i></span>\r\n        </a>\r\n        <ul>\r\n          <li><a routerLink=\"sandbox/search-city\">Search City Filter</a></li>\r\n          <li><a routerLink=\"sandbox/search-plant\">Search Plant Filter</a></li>\r\n          <li><a routerLink=\"sandbox/us-state\">US States</a></li>\r\n          <li><a routerLink=\"sandbox/search-state\">Search US States</a></li>\r\n        </ul>\r\n      </li> -->\r\n    </ul>\r\n  </nav>\r\n</div>\r\n", styles: ["*{margin:0;padding:0;box-sizing:border-box;text-transform:capitalize;text-decoration:none}.header-div{position:fixed;z-index:1000;top:0;left:0;right:0;height:var(--nav-height);background:var(--primary-color);box-shadow:0 5px 10px #0000001a;padding:0 7%;display:flex;align-items:center;justify-content:space-between}.header-div .logo{font-weight:bolder;font-size:25px;color:#333}.header-div .navbar ul{list-style:none}.header-div .navbar ul li{position:relative;float:left}.header-div .navbar ul li a{font-size:20px;padding:20px;color:#333;display:block}.header-div .navbar ul li a:hover{background:#333;color:#fff}.header-div .navbar ul li a:hover .arrow{border:solid white;border-width:0 3px 3px 0}.header-div .navbar ul li ul{position:absolute;left:0;width:200px;background:#fff;display:none}.header-div .navbar ul li ul li{width:100%;border-top:1px solid rgba(0,0,0,.1)}.header-div .navbar ul li ul li a{font-size:16px;padding:10px;display:block}.header-div .navbar ul li ul li ul{left:200px;top:0}.header-div .navbar ul li:hover>ul{display:initial}#menu-bar{border:1px solid red;display:none}.nav-toggle-label{position:absolute;top:1.5em;right:0;margin-right:1em;height:100%;display:flex;align-items:center}.nav-toggle-label span,.nav-toggle-label span:before,.nav-toggle-label span:after{display:block;background:#333;height:2px;width:2em;border-radius:2px;position:relative}.nav-toggle-label span:before,.nav-toggle-label span:after{content:\"\";position:absolute}.nav-toggle-label span:before{bottom:7px}.nav-toggle-label span:after{top:7px}.header-div label{font-size:20px;color:#333;cursor:pointer;display:none}.nav-bar-arrow-down{padding-left:5px}@media (max-width: 830px){.header-div{padding:20px}.header-div label{display:initial}.header-div .navbar{position:absolute;top:100%;left:0;right:0;background:#fff;border-top:1px solid rgba(0,0,0,.1);display:none}.header-div .navbar ul li{width:100%}.header-div .navbar ul li ul{position:relative;width:100%}.header-div .navbar ul li ul li{background:#eee}.header-div .navbar ul li ul li ul{width:100%;left:0}#menu-bar:checked~.navbar{display:initial}}.arrow{border:solid black;border-width:0 3px 3px 0;display:inline-block;padding:4px}.right{transform:rotate(-45deg);-webkit-transform:rotate(-45deg)}.left{transform:rotate(135deg);-webkit-transform:rotate(135deg)}.up{transform:rotate(-135deg);-webkit-transform:rotate(-135deg)}.down{margin-bottom:4px;transform:rotate(45deg);-webkit-transform:rotate(45deg)}\n"] }]
        }], ctorParameters: function () { return [{ type: SharedDataService }]; }, propDecorators: { navbarElementRef: [{
                type: ViewChild,
                args: ['navbar']
            }], menubarElementRef: [{
                type: ViewChild,
                args: ['menubar']
            }] } });

class NotFoundComponent {
    constructor() { }
    ngOnInit() { }
}
NotFoundComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: NotFoundComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
NotFoundComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.12", type: NotFoundComponent, selector: "app-not-found", ngImport: i0, template: "<p>Page Not Found!</p>\r\n", styles: [""] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: NotFoundComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-not-found', template: "<p>Page Not Found!</p>\r\n" }]
        }], ctorParameters: function () { return []; } });

class ElementChangingDirective {
    constructor(elRef, renderer) {
        this.elRef = elRef;
        this.renderer = renderer;
        this.elementChanging = false;
    }
    ngOnChanges(changes) {
        const parent = this.renderer.parentNode(this.elRef.nativeElement);
        // if (changes.elementChanging.currentValue) { // before Angular 13
        if (changes['elementChanging'].currentValue) {
            this.renderer.setStyle(parent, 'color', 'blue');
        }
        else {
            this.renderer.setStyle(parent, 'color', 'yellow');
        }
    }
}
ElementChangingDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: ElementChangingDirective, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Directive });
ElementChangingDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.2.12", type: ElementChangingDirective, selector: "[elementChanging]", inputs: { elementChanging: "elementChanging" }, usesOnChanges: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: ElementChangingDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[elementChanging]',
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }]; }, propDecorators: { elementChanging: [{
                type: Input
            }] } });

class MouseoverColorDirective {
    constructor(elRef, renderer) {
        this.elRef = elRef;
        this.renderer = renderer;
        this.isLoading = false;
    }
    onMouseOver() {
        const parent = this.renderer.parentNode(this.elRef.nativeElement);
        if (this.isLoading) {
            this.renderer.setStyle(parent, 'color', 'red');
        }
    }
    onMouseOut() {
        const parent = this.renderer.parentNode(this.elRef.nativeElement);
        this.renderer.setStyle(parent, 'color', '');
    }
}
MouseoverColorDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: MouseoverColorDirective, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Directive });
MouseoverColorDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.2.12", type: MouseoverColorDirective, selector: "[mouseOverColor]", inputs: { isLoading: ["mouseOverColor", "isLoading"] }, host: { listeners: { "mouseover": "onMouseOver()", "mouseout": "onMouseOut()" } }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: MouseoverColorDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[mouseOverColor]'
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }]; }, propDecorators: { isLoading: [{
                type: Input,
                args: ['mouseOverColor']
            }], onMouseOver: [{
                type: HostListener,
                args: ['mouseover']
            }], onMouseOut: [{
                type: HostListener,
                args: ['mouseout']
            }] } });

class HighlightHtmlPipe {
    transform(text, search) {
        // console.log('HighlightHtmlPipe, text: ', text);
        // console.log('HighlightHtmlPipe, search: ', search);
        if (!search || search === undefined) {
            return text;
        }
        else {
            let pattern = search.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
            pattern = pattern
                .split(' ')
                .filter((t) => {
                return t.length > 0;
            })
                .join('|');
            pattern = '(' + pattern + ')' + '(?![^<]*>)';
            const regex = new RegExp(pattern, 'gi');
            return search
                ? text.replace(regex, (match) => `<span class="highlight">${match}</span>`)
                : text;
        }
    }
}
HighlightHtmlPipe.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: HighlightHtmlPipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe });
HighlightHtmlPipe.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "14.2.12", ngImport: i0, type: HighlightHtmlPipe, name: "highlightHtml" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: HighlightHtmlPipe, decorators: [{
            type: Pipe,
            args: [{ name: 'highlightHtml' }]
        }] });

class HighlighterPipe {
    transform(value, args, type) {
        // console.log('HighlighterPipe, ', value, args);
        if (!args) {
            return value;
        }
        if (type === 'full') {
            const re = new RegExp('\\b(' + args + '\\b)', 'igm');
            value = value.replace(re, '<span class="highlighted-text">$1</span>');
        }
        else {
            const re = new RegExp(args, 'igm');
            value = value.replace(re, '<span class="highlighted-text">$&</span>');
        }
        return value;
    }
}
HighlighterPipe.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: HighlighterPipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe });
HighlighterPipe.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "14.2.12", ngImport: i0, type: HighlighterPipe, name: "highlighter" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: HighlighterPipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'highlighter',
                }]
        }] });

class CarDataService {
    constructor() {
        this.indexSeed = 4; // at least length of following
        this.brand = ['Toyota', 'Chevy', 'GM', 'Buick', 'Honda'];
        this.model = [
            'model1',
            'model2',
            'model3',
            'model4',
            'model5',
            'model6',
            'model7',
            'model8',
        ];
        this.years = ['2018', '2019', '2020', '2021', '2022', '2023'];
        this.dataSource$ = this.getCarItems(50).pipe(take(1));
    }
    getCarItems(numOfItems, delayInMs) {
        const items = this.makeMockItems(numOfItems);
        if (!delayInMs) {
            return of(items);
        }
        return of(items).pipe(delay(delayInMs));
    }
    getSortedCarItems(items, compareFn) {
        if (!compareFn) {
            compareFn = (a, b) => {
                return a.brand > b.brand ? 1 : b.brand > a.brand ? -1 : 0;
            };
        }
        return compareFn ? items.sort(compareFn) : items;
    }
    makeMockItems(numOfItems) {
        if (!numOfItems) {
            numOfItems = 20;
        }
        const items = [];
        for (let i = 0; i < numOfItems; i++) {
            const brand = this.brand[i % this.brand.length];
            const model = this.model[i % this.model.length];
            const year = this.years[i % this.years.length];
            items.push({
                id: i,
                brand: brand,
                model: model,
                year: year,
            });
        }
        return items;
    }
    getCarGroupsByBrand(cars, sort) {
        const result = [];
        for (const { brand, model, year } of cars) {
            let resultItem = result[brand];
            if (!resultItem) {
                resultItem = { brand: brand, items: [] };
            }
            resultItem.items.push({ brand, model, year });
        }
        return sort
            ? result.sort((a, b) => (a.brand > b.brand ? 1 : b.brand > a.brand ? -1 : 0))
            : result;
    }
    getCarItemsGroupByBrand(cars) {
        const carGroups = this.getCarGroupsByBrand(cars, true);
        const result = [];
        carGroups.map((groupItem) => {
            const carItems = groupItem.items;
            result.concat(carItems);
        });
        return result;
    }
}
CarDataService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: CarDataService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
CarDataService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: CarDataService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: CarDataService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }] });

class Card {
    constructor(title, text) {
        this.title = title;
        this.text = text;
        this.hide = true;
    }
    toggle() {
        this.hide = !this.hide;
    }
}
class NavBarModel {
}

class CardDataService {
    constructor() {
        this.cards = [
            new Card('What did the cheese say when it looked in the mirror?', 'Hello-me (Halloumi)'),
            new Card('What kind of cheese do you use to disguise a small horse?', 'Mask-a-pony (Mascarpone)'),
            new Card('A kid threw a lump of cheddar at me', "I thought 'That's not very mature"),
        ];
        this.onDestroy$ = new Subject();
    }
    getCards() {
        return of(this.cards);
    }
    ngOnDestroy() {
        this.onDestroy$.next(true);
        this.onDestroy$.complete();
    }
}
CardDataService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: CardDataService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
CardDataService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: CardDataService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: CardDataService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: function () { return []; } });

const GITHUB_URL_USERS = 'https://api.github.com/search/users';
const GITHUB_URL_REPOS = 'https://api.github.com/search/repositories';
class GithubService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    searchUsers(term) {
        if (term === '') {
            return of([]);
        }
        return this.httpClient
            .get(GITHUB_URL_USERS, {
            params: { q: term },
        })
            .pipe(map((data) => (data && data.items) || []), catchError((err) => {
            this.errorMessage = (err && err.message) || 'Something goes wrong';
            console.log('GithubService, searchUsers: ', term, this.errorMessage);
            return of([]);
        }));
    }
    searchRepos(term) {
        if (term === '') {
            console.log('Not defined');
            return of(null);
            //return empty();
        }
        else {
            let params = { q: term };
            return this.httpClient.get(GITHUB_URL_REPOS, { params }).pipe(map((response) => {
                var _a;
                console.log('GithubService, searchRepos: ', response);
                console.log('GithubService, searchRepos, response.items.size: ', (_a = response === null || response === void 0 ? void 0 : response.items) === null || _a === void 0 ? void 0 : _a.length);
                return response['items'];
            }));
        }
    }
}
GithubService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: GithubService, deps: [{ token: i1$1.HttpClient }], target: i0.ɵɵFactoryTarget.Injectable });
GithubService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: GithubService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: GithubService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1$1.HttpClient }]; } });

const STATE_WITH_FLAG_DATA = [
    {
        stateName: 'Alabama',
        flag_img: '5/5c/Flag_of_Alabama.svg/45px-Flag_of_Alabama.svg.png',
    },
    {
        stateName: 'Alaska',
        flag_img: 'e/e6/Flag_of_Alaska.svg/43px-Flag_of_Alaska.svg.png',
    },
    {
        stateName: 'Arizona',
        flag_img: '9/9d/Flag_of_Arizona.svg/45px-Flag_of_Arizona.svg.png',
    },
    {
        stateName: 'Arkansas',
        flag_img: '9/9d/Flag_of_Arkansas.svg/45px-Flag_of_Arkansas.svg.png',
    },
    {
        stateName: 'California',
        flag_img: '0/01/Flag_of_California.svg/45px-Flag_of_California.svg.png',
    },
    {
        stateName: 'Colorado',
        flag_img: '4/46/Flag_of_Colorado.svg/45px-Flag_of_Colorado.svg.png',
    },
    {
        stateName: 'Connecticut',
        flag_img: '9/96/Flag_of_Connecticut.svg/39px-Flag_of_Connecticut.svg.png',
    },
    {
        stateName: 'Delaware',
        flag_img: 'c/c6/Flag_of_Delaware.svg/45px-Flag_of_Delaware.svg.png',
    },
    {
        stateName: 'Florida',
        flag_img: 'f/f7/Flag_of_Florida.svg/45px-Flag_of_Florida.svg.png',
    },
    {
        stateName: 'Georgia',
        flag_img: '5/54/Flag_of_Georgia_%28U.S._state%29.svg/46px-Flag_of_Georgia_%28U.S._state%29.svg.png',
    },
    {
        stateName: 'Hawaii',
        flag_img: 'e/ef/Flag_of_Hawaii.svg/46px-Flag_of_Hawaii.svg.png',
    },
    { stateName: 'Idaho', flag_img: 'a/a4/Flag_of_Idaho.svg/38px-Flag_of_Idaho.svg.png' },
    {
        stateName: 'Illinois',
        flag_img: '0/01/Flag_of_Illinois.svg/46px-Flag_of_Illinois.svg.png',
    },
    {
        stateName: 'Indiana',
        flag_img: 'a/ac/Flag_of_Indiana.svg/45px-Flag_of_Indiana.svg.png',
    },
    { stateName: 'Iowa', flag_img: 'a/aa/Flag_of_Iowa.svg/44px-Flag_of_Iowa.svg.png' },
    {
        stateName: 'Kansas',
        flag_img: 'd/da/Flag_of_Kansas.svg/46px-Flag_of_Kansas.svg.png',
    },
    {
        stateName: 'Kentucky',
        flag_img: '8/8d/Flag_of_Kentucky.svg/46px-Flag_of_Kentucky.svg.png',
    },
    {
        stateName: 'Louisiana',
        flag_img: 'e/e0/Flag_of_Louisiana.svg/46px-Flag_of_Louisiana.svg.png',
    },
    { stateName: 'Maine', flag_img: '3/35/Flag_of_Maine.svg/45px-Flag_of_Maine.svg.png' },
    {
        stateName: 'Maryland',
        flag_img: 'a/a0/Flag_of_Maryland.svg/45px-Flag_of_Maryland.svg.png',
    },
    {
        stateName: 'Massachusetts',
        flag_img: 'f/f2/Flag_of_Massachusetts.svg/46px-Flag_of_Massachusetts.svg.png',
    },
    {
        stateName: 'Michigan',
        flag_img: 'b/b5/Flag_of_Michigan.svg/45px-Flag_of_Michigan.svg.png',
    },
    {
        stateName: 'Minnesota',
        flag_img: 'b/b9/Flag_of_Minnesota.svg/46px-Flag_of_Minnesota.svg.png',
    },
    {
        stateName: 'Mississippi',
        flag_img: '4/42/Flag_of_Mississippi.svg/45px-Flag_of_Mississippi.svg.png',
    },
    {
        stateName: 'Missouri',
        flag_img: '5/5a/Flag_of_Missouri.svg/46px-Flag_of_Missouri.svg.png',
    },
    {
        stateName: 'Montana',
        flag_img: 'c/cb/Flag_of_Montana.svg/45px-Flag_of_Montana.svg.png',
    },
    {
        stateName: 'Nebraska',
        flag_img: '4/4d/Flag_of_Nebraska.svg/46px-Flag_of_Nebraska.svg.png',
    },
    {
        stateName: 'Nevada',
        flag_img: 'f/f1/Flag_of_Nevada.svg/45px-Flag_of_Nevada.svg.png',
    },
    {
        stateName: 'New Hampshire',
        flag_img: '2/28/Flag_of_New_Hampshire.svg/45px-Flag_of_New_Hampshire.svg.png',
    },
    {
        stateName: 'New Jersey',
        flag_img: '9/92/Flag_of_New_Jersey.svg/45px-Flag_of_New_Jersey.svg.png',
    },
    {
        stateName: 'New Mexico',
        flag_img: 'c/c3/Flag_of_New_Mexico.svg/45px-Flag_of_New_Mexico.svg.png',
    },
    {
        stateName: 'New York',
        flag_img: '1/1a/Flag_of_New_York.svg/46px-Flag_of_New_York.svg.png',
    },
    {
        stateName: 'North Carolina',
        flag_img: 'b/bb/Flag_of_North_Carolina.svg/45px-Flag_of_North_Carolina.svg.png',
    },
    {
        stateName: 'North Dakota',
        flag_img: 'e/ee/Flag_of_North_Dakota.svg/38px-Flag_of_North_Dakota.svg.png',
    },
    { stateName: 'Ohio', flag_img: '4/4c/Flag_of_Ohio.svg/46px-Flag_of_Ohio.svg.png' },
    {
        stateName: 'Oklahoma',
        flag_img: '6/6e/Flag_of_Oklahoma.svg/45px-Flag_of_Oklahoma.svg.png',
    },
    {
        stateName: 'Oregon',
        flag_img: 'b/b9/Flag_of_Oregon.svg/46px-Flag_of_Oregon.svg.png',
    },
    {
        stateName: 'Pennsylvania',
        flag_img: 'f/f7/Flag_of_Pennsylvania.svg/45px-Flag_of_Pennsylvania.svg.png',
    },
    {
        stateName: 'Rhode Island',
        flag_img: 'f/f3/Flag_of_Rhode_Island.svg/32px-Flag_of_Rhode_Island.svg.png',
    },
    {
        stateName: 'South Carolina',
        flag_img: '6/69/Flag_of_South_Carolina.svg/45px-Flag_of_South_Carolina.svg.png',
    },
    {
        stateName: 'South Dakota',
        flag_img: '1/1a/Flag_of_South_Dakota.svg/46px-Flag_of_South_Dakota.svg.png',
    },
    {
        stateName: 'Tennessee',
        flag_img: '9/9e/Flag_of_Tennessee.svg/46px-Flag_of_Tennessee.svg.png',
    },
    { stateName: 'Texas', flag_img: 'f/f7/Flag_of_Texas.svg/45px-Flag_of_Texas.svg.png' },
    { stateName: 'Utah', flag_img: 'f/f6/Flag_of_Utah.svg/45px-Flag_of_Utah.svg.png' },
    {
        stateName: 'Vermont',
        flag_img: '4/49/Flag_of_Vermont.svg/46px-Flag_of_Vermont.svg.png',
    },
    {
        stateName: 'Virginia',
        flag_img: '4/47/Flag_of_Virginia.svg/44px-Flag_of_Virginia.svg.png',
    },
    {
        stateName: 'Washington',
        flag_img: '5/54/Flag_of_Washington.svg/46px-Flag_of_Washington.svg.png',
    },
    {
        stateName: 'West Virginia',
        flag_img: '2/22/Flag_of_West_Virginia.svg/46px-Flag_of_West_Virginia.svg.png',
    },
    {
        stateName: 'Wisconsin',
        flag_img: '2/22/Flag_of_Wisconsin.svg/45px-Flag_of_Wisconsin.svg.png',
    },
    {
        stateName: 'Wyoming',
        flag_img: 'b/bc/Flag_of_Wyoming.svg/43px-Flag_of_Wyoming.svg.png',
    },
];

const US_STATE_WITH_CITIES_DATA = {
    "New York": [
        "Buffalo",
        "Rochester",
        "Yonkers",
        "Syracuse",
        "Albany",
        "New Rochelle",
        "Mount Vernon",
        "Schenectady",
        "Utica",
        "White Plains",
        "Hempstead",
        "Troy",
        "New York City",
        "Niagara Falls",
        "Binghamton",
        "Freeport",
        "Valley Stream"
    ],
    "California": [
        "Los Angeles",
        "San Diego",
        "San Jose",
        "San Francisco",
        "Fresno",
        "Sacramento",
        "Long Beach",
        "Oakland",
        "Bakersfield",
        "Anaheim",
        "Santa Ana",
        "Riverside",
        "Stockton",
        "Chula Vista",
        "Irvine",
        "Fremont",
        "San Bernardino",
        "Modesto",
        "Fontana",
        "Oxnard",
        "Moreno Valley",
        "Huntington Beach",
        "Glendale",
        "Santa Clarita",
        "Garden Grove",
        "Oceanside",
        "Rancho Cucamonga",
        "Santa Rosa",
        "Ontario",
        "Lancaster",
        "Elk Grove",
        "Corona",
        "Palmdale",
        "Salinas",
        "Pomona",
        "Hayward",
        "Escondido",
        "Torrance",
        "Sunnyvale",
        "Orange",
        "Fullerton",
        "Pasadena",
        "Thousand Oaks",
        "Visalia",
        "Simi Valley",
        "Concord",
        "Roseville",
        "Victorville",
        "Santa Clara",
        "Vallejo",
        "Berkeley",
        "El Monte",
        "Downey",
        "Costa Mesa",
        "Inglewood",
        "Carlsbad",
        "San Buenaventura (Ventura)",
        "Fairfield",
        "West Covina",
        "Murrieta",
        "Richmond",
        "Norwalk",
        "Antioch",
        "Temecula",
        "Burbank",
        "Daly City",
        "Rialto",
        "Santa Maria",
        "El Cajon",
        "San Mateo",
        "Clovis",
        "Compton",
        "Jurupa Valley",
        "Vista",
        "South Gate",
        "Mission Viejo",
        "Vacaville",
        "Carson",
        "Hesperia",
        "Santa Monica",
        "Westminster",
        "Redding",
        "Santa Barbara",
        "Chico",
        "Newport Beach",
        "San Leandro",
        "San Marcos",
        "Whittier",
        "Hawthorne",
        "Citrus Heights",
        "Tracy",
        "Alhambra",
        "Livermore",
        "Buena Park",
        "Menifee",
        "Hemet",
        "Lakewood",
        "Merced",
        "Chino",
        "Indio",
        "Redwood City",
        "Lake Forest",
        "Napa",
        "Tustin",
        "Bellflower",
        "Mountain View",
        "Chino Hills",
        "Baldwin Park",
        "Alameda",
        "Upland",
        "San Ramon",
        "Folsom",
        "Pleasanton",
        "Union City",
        "Perris",
        "Manteca",
        "Lynwood",
        "Apple Valley",
        "Redlands",
        "Turlock",
        "Milpitas",
        "Redondo Beach",
        "Rancho Cordova",
        "Yorba Linda",
        "Palo Alto",
        "Davis",
        "Camarillo",
        "Walnut Creek",
        "Pittsburg",
        "Yuba City",
        "San Clemente",
        "Laguna Niguel",
        "Pico Rivera",
        "Montebello",
        "Lodi",
        "Madera",
        "Santa Cruz",
        "La Habra",
        "Encinitas",
        "Monterey Park",
        "Tulare",
        "Cupertino",
        "Gardena",
        "National City",
        "Rocklin",
        "Petaluma",
        "Huntington Park",
        "San Rafael",
        "La Mesa",
        "Arcadia",
        "Fountain Valley",
        "Diamond Bar",
        "Woodland",
        "Santee",
        "Lake Elsinore",
        "Porterville",
        "Paramount",
        "Eastvale",
        "Rosemead",
        "Hanford",
        "Highland",
        "Brentwood",
        "Novato",
        "Colton",
        "Cathedral City",
        "Delano",
        "Yucaipa",
        "Watsonville",
        "Placentia",
        "Glendora",
        "Gilroy",
        "Palm Desert",
        "Cerritos",
        "West Sacramento",
        "Aliso Viejo",
        "Poway",
        "La Mirada",
        "Rancho Santa Margarita",
        "Cypress",
        "Dublin",
        "Covina",
        "Azusa",
        "Palm Springs",
        "San Luis Obispo",
        "Ceres",
        "San Jacinto",
        "Lincoln",
        "Newark",
        "Lompoc",
        "El Centro",
        "Danville",
        "Bell Gardens",
        "Coachella",
        "Rancho Palos Verdes",
        "San Bruno",
        "Rohnert Park",
        "Brea",
        "La Puente",
        "Campbell",
        "San Gabriel",
        "Beaumont",
        "Morgan Hill",
        "Culver City",
        "Calexico",
        "Stanton",
        "La Quinta",
        "Pacifica",
        "Montclair",
        "Oakley",
        "Monrovia",
        "Los Banos",
        "Martinez"
    ],
    "Illinois": [
        "Chicago",
        "Aurora",
        "Rockford",
        "Joliet",
        "Naperville",
        "Springfield",
        "Peoria",
        "Elgin",
        "Waukegan",
        "Cicero",
        "Champaign",
        "Bloomington",
        "Arlington Heights",
        "Evanston",
        "Decatur",
        "Schaumburg",
        "Bolingbrook",
        "Palatine",
        "Skokie",
        "Des Plaines",
        "Orland Park",
        "Tinley Park",
        "Oak Lawn",
        "Berwyn",
        "Mount Prospect",
        "Normal",
        "Wheaton",
        "Hoffman Estates",
        "Oak Park",
        "Downers Grove",
        "Elmhurst",
        "Glenview",
        "DeKalb",
        "Lombard",
        "Belleville",
        "Moline",
        "Buffalo Grove",
        "Bartlett",
        "Urbana",
        "Quincy",
        "Crystal Lake",
        "Plainfield",
        "Streamwood",
        "Carol Stream",
        "Romeoville",
        "Rock Island",
        "Hanover Park",
        "Carpentersville",
        "Wheeling",
        "Park Ridge",
        "Addison",
        "Calumet City"
    ],
    "Texas": [
        "Houston",
        "San Antonio",
        "Dallas",
        "Austin",
        "Fort Worth",
        "El Paso",
        "Arlington",
        "Corpus Christi",
        "Plano",
        "Laredo",
        "Lubbock",
        "Garland",
        "Irving",
        "Amarillo",
        "Grand Prairie",
        "Brownsville",
        "Pasadena",
        "McKinney",
        "Mesquite",
        "McAllen",
        "Killeen",
        "Frisco",
        "Waco",
        "Carrollton",
        "Denton",
        "Midland",
        "Abilene",
        "Beaumont",
        "Round Rock",
        "Odessa",
        "Wichita Falls",
        "Richardson",
        "Lewisville",
        "Tyler",
        "College Station",
        "Pearland",
        "San Angelo",
        "Allen",
        "League City",
        "Sugar Land",
        "Longview",
        "Edinburg",
        "Mission",
        "Bryan",
        "Baytown",
        "Pharr",
        "Temple",
        "Missouri City",
        "Flower Mound",
        "Harlingen",
        "North Richland Hills",
        "Victoria",
        "Conroe",
        "New Braunfels",
        "Mansfield",
        "Cedar Park",
        "Rowlett",
        "Port Arthur",
        "Euless",
        "Georgetown",
        "Pflugerville",
        "DeSoto",
        "San Marcos",
        "Grapevine",
        "Bedford",
        "Galveston",
        "Cedar Hill",
        "Texas City",
        "Wylie",
        "Haltom City",
        "Keller",
        "Coppell",
        "Rockwall",
        "Huntsville",
        "Duncanville",
        "Sherman",
        "The Colony",
        "Burleson",
        "Hurst",
        "Lancaster",
        "Texarkana",
        "Friendswood",
        "Weslaco"
    ],
    "Pennsylvania": [
        "Philadelphia",
        "Pittsburgh",
        "Allentown",
        "Erie",
        "Reading",
        "Scranton",
        "Bethlehem",
        "Lancaster",
        "Harrisburg",
        "Altoona",
        "York",
        "State College",
        "Wilkes-Barre"
    ],
    "Arizona": [
        "Phoenix",
        "Tucson",
        "Mesa",
        "Chandler",
        "Glendale",
        "Scottsdale",
        "Gilbert",
        "Tempe",
        "Peoria",
        "Surprise",
        "Yuma",
        "Avondale",
        "Goodyear",
        "Flagstaff",
        "Buckeye",
        "Lake Havasu City",
        "Casa Grande",
        "Sierra Vista",
        "Maricopa",
        "Oro Valley",
        "Prescott",
        "Bullhead City",
        "Prescott Valley",
        "Marana",
        "Apache Junction"
    ],
    "Florida": [
        "Jacksonville",
        "Miami",
        "Tampa",
        "Orlando",
        "St. Petersburg",
        "Hialeah",
        "Tallahassee",
        "Fort Lauderdale",
        "Port St. Lucie",
        "Cape Coral",
        "Pembroke Pines",
        "Hollywood",
        "Miramar",
        "Gainesville",
        "Coral Springs",
        "Miami Gardens",
        "Clearwater",
        "Palm Bay",
        "Pompano Beach",
        "West Palm Beach",
        "Lakeland",
        "Davie",
        "Miami Beach",
        "Sunrise",
        "Plantation",
        "Boca Raton",
        "Deltona",
        "Largo",
        "Deerfield Beach",
        "Palm Coast",
        "Melbourne",
        "Boynton Beach",
        "Lauderhill",
        "Weston",
        "Fort Myers",
        "Kissimmee",
        "Homestead",
        "Tamarac",
        "Delray Beach",
        "Daytona Beach",
        "North Miami",
        "Wellington",
        "North Port",
        "Jupiter",
        "Ocala",
        "Port Orange",
        "Margate",
        "Coconut Creek",
        "Sanford",
        "Sarasota",
        "Pensacola",
        "Bradenton",
        "Palm Beach Gardens",
        "Pinellas Park",
        "Coral Gables",
        "Doral",
        "Bonita Springs",
        "Apopka",
        "Titusville",
        "North Miami Beach",
        "Oakland Park",
        "Fort Pierce",
        "North Lauderdale",
        "Cutler Bay",
        "Altamonte Springs",
        "St. Cloud",
        "Greenacres",
        "Ormond Beach",
        "Ocoee",
        "Hallandale Beach",
        "Winter Garden",
        "Aventura"
    ],
    "Indiana": [
        "Indianapolis",
        "Fort Wayne",
        "Evansville",
        "South Bend",
        "Carmel",
        "Bloomington",
        "Fishers",
        "Hammond",
        "Gary",
        "Muncie",
        "Lafayette",
        "Terre Haute",
        "Kokomo",
        "Anderson",
        "Noblesville",
        "Greenwood",
        "Elkhart",
        "Mishawaka",
        "Lawrence",
        "Jeffersonville",
        "Columbus",
        "Portage"
    ],
    "Ohio": [
        "Columbus",
        "Cleveland",
        "Cincinnati",
        "Toledo",
        "Akron",
        "Dayton",
        "Parma",
        "Canton",
        "Youngstown",
        "Lorain",
        "Hamilton",
        "Springfield",
        "Kettering",
        "Elyria",
        "Lakewood",
        "Cuyahoga Falls",
        "Middletown",
        "Euclid",
        "Newark",
        "Mansfield",
        "Mentor",
        "Beavercreek",
        "Cleveland Heights",
        "Strongsville",
        "Dublin",
        "Fairfield",
        "Findlay",
        "Warren",
        "Lancaster",
        "Lima",
        "Huber Heights",
        "Westerville",
        "Marion",
        "Grove City"
    ],
    "North Carolina": [
        "Charlotte",
        "Raleigh",
        "Greensboro",
        "Durham",
        "Winston-Salem",
        "Fayetteville",
        "Cary",
        "Wilmington",
        "High Point",
        "Greenville",
        "Asheville",
        "Concord",
        "Gastonia",
        "Jacksonville",
        "Chapel Hill",
        "Rocky Mount",
        "Burlington",
        "Wilson",
        "Huntersville",
        "Kannapolis",
        "Apex",
        "Hickory",
        "Goldsboro"
    ],
    "Michigan": [
        "Detroit",
        "Grand Rapids",
        "Warren",
        "Sterling Heights",
        "Ann Arbor",
        "Lansing",
        "Flint",
        "Dearborn",
        "Livonia",
        "Westland",
        "Troy",
        "Farmington Hills",
        "Kalamazoo",
        "Wyoming",
        "Southfield",
        "Rochester Hills",
        "Taylor",
        "Pontiac",
        "St. Clair Shores",
        "Royal Oak",
        "Novi",
        "Dearborn Heights",
        "Battle Creek",
        "Saginaw",
        "Kentwood",
        "East Lansing",
        "Roseville",
        "Portage",
        "Midland",
        "Lincoln Park",
        "Muskegon"
    ],
    "Tennessee": [
        "Memphis",
        "Nashville-Davidson",
        "Knoxville",
        "Chattanooga",
        "Clarksville",
        "Murfreesboro",
        "Jackson",
        "Franklin",
        "Johnson City",
        "Bartlett",
        "Hendersonville",
        "Kingsport",
        "Collierville",
        "Cleveland",
        "Smyrna",
        "Germantown",
        "Brentwood"
    ],
    "Massachusetts": [
        "Boston",
        "Worcester",
        "Springfield",
        "Lowell",
        "Cambridge",
        "New Bedford",
        "Brockton",
        "Quincy",
        "Lynn",
        "Fall River",
        "Newton",
        "Lawrence",
        "Somerville",
        "Waltham",
        "Haverhill",
        "Malden",
        "Medford",
        "Taunton",
        "Chicopee",
        "Weymouth Town",
        "Revere",
        "Peabody",
        "Methuen",
        "Barnstable Town",
        "Pittsfield",
        "Attleboro",
        "Everett",
        "Salem",
        "Westfield",
        "Leominster",
        "Fitchburg",
        "Beverly",
        "Holyoke",
        "Marlborough",
        "Woburn",
        "Chelsea"
    ],
    "Washington": [
        "Seattle",
        "Spokane",
        "Tacoma",
        "Vancouver",
        "Bellevue",
        "Kent",
        "Everett",
        "Renton",
        "Yakima",
        "Federal Way",
        "Spokane Valley",
        "Bellingham",
        "Kennewick",
        "Auburn",
        "Pasco",
        "Marysville",
        "Lakewood",
        "Redmond",
        "Shoreline",
        "Richland",
        "Kirkland",
        "Burien",
        "Sammamish",
        "Olympia",
        "Lacey",
        "Edmonds",
        "Bremerton",
        "Puyallup"
    ],
    "Colorado": [
        "Denver",
        "Colorado Springs",
        "Aurora",
        "Fort Collins",
        "Lakewood",
        "Thornton",
        "Arvada",
        "Westminster",
        "Pueblo",
        "Centennial",
        "Boulder",
        "Greeley",
        "Longmont",
        "Loveland",
        "Grand Junction",
        "Broomfield",
        "Castle Rock",
        "Commerce City",
        "Parker",
        "Littleton",
        "Northglenn"
    ],
    "District of Columbia": [
        "Washington"
    ],
    "Maryland": [
        "Baltimore",
        "Frederick",
        "Rockville",
        "Gaithersburg",
        "Bowie",
        "Hagerstown",
        "Annapolis"
    ],
    "Kentucky": [
        "Louisville/Jefferson County",
        "Lexington-Fayette",
        "Bowling Green",
        "Owensboro",
        "Covington"
    ],
    "Oregon": [
        "Portland",
        "Eugene",
        "Salem",
        "Gresham",
        "Hillsboro",
        "Beaverton",
        "Bend",
        "Medford",
        "Springfield",
        "Corvallis",
        "Albany",
        "Tigard",
        "Lake Oswego",
        "Keizer"
    ],
    "Oklahoma": [
        "Oklahoma City",
        "Tulsa",
        "Norman",
        "Broken Arrow",
        "Lawton",
        "Edmond",
        "Moore",
        "Midwest City",
        "Enid",
        "Stillwater",
        "Muskogee"
    ],
    "Wisconsin": [
        "Milwaukee",
        "Madison",
        "Green Bay",
        "Kenosha",
        "Racine",
        "Appleton",
        "Waukesha",
        "Eau Claire",
        "Oshkosh",
        "Janesville",
        "West Allis",
        "La Crosse",
        "Sheboygan",
        "Wauwatosa",
        "Fond du Lac",
        "New Berlin",
        "Wausau",
        "Brookfield",
        "Greenfield",
        "Beloit"
    ],
    "Nevada": [
        "Las Vegas",
        "Henderson",
        "Reno",
        "North Las Vegas",
        "Sparks",
        "Carson City"
    ],
    "New Mexico": [
        "Albuquerque",
        "Las Cruces",
        "Rio Rancho",
        "Santa Fe",
        "Roswell",
        "Farmington",
        "Clovis"
    ],
    "Missouri": [
        "Kansas City",
        "St. Louis",
        "Springfield",
        "Independence",
        "Columbia",
        "Lee's Summit",
        "O'Fallon",
        "St. Joseph",
        "St. Charles",
        "St. Peters",
        "Blue Springs",
        "Florissant",
        "Joplin",
        "Chesterfield",
        "Jefferson City",
        "Cape Girardeau"
    ],
    "Virginia": [
        "Virginia Beach",
        "Norfolk",
        "Chesapeake",
        "Richmond",
        "Newport News",
        "Alexandria",
        "Hampton",
        "Roanoke",
        "Portsmouth",
        "Suffolk",
        "Lynchburg",
        "Harrisonburg",
        "Leesburg",
        "Charlottesville",
        "Danville",
        "Blacksburg",
        "Manassas"
    ],
    "Georgia": [
        "Atlanta",
        "Columbus",
        "Augusta-Richmond County",
        "Savannah",
        "Athens-Clarke County",
        "Sandy Springs",
        "Roswell",
        "Macon",
        "Johns Creek",
        "Albany",
        "Warner Robins",
        "Alpharetta",
        "Marietta",
        "Valdosta",
        "Smyrna",
        "Dunwoody"
    ],
    "Nebraska": [
        "Omaha",
        "Lincoln",
        "Bellevue",
        "Grand Island"
    ],
    "Minnesota": [
        "Minneapolis",
        "St. Paul",
        "Rochester",
        "Duluth",
        "Bloomington",
        "Brooklyn Park",
        "Plymouth",
        "St. Cloud",
        "Eagan",
        "Woodbury",
        "Maple Grove",
        "Eden Prairie",
        "Coon Rapids",
        "Burnsville",
        "Blaine",
        "Lakeville",
        "Minnetonka",
        "Apple Valley",
        "Edina",
        "St. Louis Park",
        "Mankato",
        "Maplewood",
        "Moorhead",
        "Shakopee"
    ],
    "Kansas": [
        "Wichita",
        "Overland Park",
        "Kansas City",
        "Olathe",
        "Topeka",
        "Lawrence",
        "Shawnee",
        "Manhattan",
        "Lenexa",
        "Salina",
        "Hutchinson"
    ],
    "Louisiana": [
        "New Orleans",
        "Baton Rouge",
        "Shreveport",
        "Lafayette",
        "Lake Charles",
        "Kenner",
        "Bossier City",
        "Monroe",
        "Alexandria"
    ],
    "Hawaii": [
        "Honolulu"
    ],
    "Alaska": [
        "Anchorage"
    ],
    "New Jersey": [
        "Newark",
        "Jersey City",
        "Paterson",
        "Elizabeth",
        "Clifton",
        "Trenton",
        "Camden",
        "Passaic",
        "Union City",
        "Bayonne",
        "East Orange",
        "Vineland",
        "New Brunswick",
        "Hoboken",
        "Perth Amboy",
        "West New York",
        "Plainfield",
        "Hackensack",
        "Sayreville",
        "Kearny",
        "Linden",
        "Atlantic City"
    ],
    "Idaho": [
        "Boise City",
        "Nampa",
        "Meridian",
        "Idaho Falls",
        "Pocatello",
        "Caldwell",
        "Coeur d'Alene",
        "Twin Falls"
    ],
    "Alabama": [
        "Birmingham",
        "Montgomery",
        "Mobile",
        "Huntsville",
        "Tuscaloosa",
        "Hoover",
        "Dothan",
        "Auburn",
        "Decatur",
        "Madison",
        "Florence",
        "Gadsden"
    ],
    "Iowa": [
        "Des Moines",
        "Cedar Rapids",
        "Davenport",
        "Sioux City",
        "Iowa City",
        "Waterloo",
        "Council Bluffs",
        "Ames",
        "West Des Moines",
        "Dubuque",
        "Ankeny",
        "Urbandale",
        "Cedar Falls"
    ],
    "Arkansas": [
        "Little Rock",
        "Fort Smith",
        "Fayetteville",
        "Springdale",
        "Jonesboro",
        "North Little Rock",
        "Conway",
        "Rogers",
        "Pine Bluff",
        "Bentonville"
    ],
    "Utah": [
        "Salt Lake City",
        "West Valley City",
        "Provo",
        "West Jordan",
        "Orem",
        "Sandy",
        "Ogden",
        "St. George",
        "Layton",
        "Taylorsville",
        "South Jordan",
        "Lehi",
        "Logan",
        "Murray",
        "Draper",
        "Bountiful",
        "Riverton",
        "Roy"
    ],
    "Rhode Island": [
        "Providence",
        "Warwick",
        "Cranston",
        "Pawtucket",
        "East Providence",
        "Woonsocket"
    ],
    "Mississippi": [
        "Jackson",
        "Gulfport",
        "Southaven",
        "Hattiesburg",
        "Biloxi",
        "Meridian"
    ],
    "South Dakota": [
        "Sioux Falls",
        "Rapid City"
    ],
    "Connecticut": [
        "Bridgeport",
        "New Haven",
        "Stamford",
        "Hartford",
        "Waterbury",
        "Norwalk",
        "Danbury",
        "New Britain",
        "Meriden",
        "Bristol",
        "West Haven",
        "Milford",
        "Middletown",
        "Norwich",
        "Shelton"
    ],
    "South Carolina": [
        "Columbia",
        "Charleston",
        "North Charleston",
        "Mount Pleasant",
        "Rock Hill",
        "Greenville",
        "Summerville",
        "Sumter",
        "Goose Creek",
        "Hilton Head Island",
        "Florence",
        "Spartanburg"
    ],
    "New Hampshire": [
        "Manchester",
        "Nashua",
        "Concord"
    ],
    "North Dakota": [
        "Fargo",
        "Bismarck",
        "Grand Forks",
        "Minot"
    ],
    "Montana": [
        "Billings",
        "Missoula",
        "Great Falls",
        "Bozeman"
    ],
    "Delaware": [
        "Wilmington",
        "Dover"
    ],
    "Maine": [
        "Portland"
    ],
    "Wyoming": [
        "Cheyenne",
        "Casper"
    ],
    "West Virginia": [
        "Charleston",
        "Huntington"
    ],
    "Vermont": [
        "Burlington"
    ]
};
// export const US_STATE_WITH_CITIES: UsStateWithCities = Object.entries(US_STATE_WITH_CITIES_DATA).sort();
const US_STATE_WITH_CITIES = Object.entries(US_STATE_WITH_CITIES_DATA).sort();

class StateService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        // this.statesWithFlag$ = this.httpClient //
        //   .get('assets/mockdata/statesWithFlag.json') as Observable<UsState[]>; // angular support asset in lib since v9
        // .get('../data/statesWithFlag.json') as Observable<UsState[]>;
        this.getUsStates();
    }
    getUsStates() {
        // return this.statesWithFlag$;
        return this.httpClient.get('assets/mockdata/statesWithFlag.json').pipe(map((data) => {
            console.log('oops-lib002, StateService, getUsStates from statesWithFlag.json');
            return data;
        }), catchError((err) => {
            console.log('oops-lib002, StateService, json file not exist? OK, will get from data.ts!');
            console.error(err);
            console.log('oops-lib002, StateService, getUsStateCityData from usStateWithCities.data.ts');
            return of(STATE_WITH_FLAG_DATA);
        }));
    }
    searchUsStates(term) {
        console.log('searchStates ....', term);
        if (term === '') {
            return of([]);
        }
        return this.getUsStates().pipe(map((items) => {
            return (items.filter((item) => {
                // console.log('searchState ...', term, item.name.toLowerCase().indexOf(term.toLowerCase()));
                return item.stateName.toLowerCase().indexOf(term.toLowerCase()) >= 0;
            }) || []);
        }), tap((items) => console.log('search result.size: ', (items && items.length) || '0'))
        // tap((items) => console.log('search result.size: ', items))
        );
    }
    getUsStateCityFromTs() {
        return of(US_STATE_WITH_CITIES);
    }
    getUsStateCityData() {
        return this.httpClient.get('assets/mockdata/cities.json').pipe(map((data) => {
            console.log('oops-lib002, StateService, getUsStateCityData from cities.json');
            return Object.entries(data).sort();
        }), catchError((err) => {
            console.log('oops-lib002, StateService, json file not exist? OK, will get from data.ts!');
            console.warn(err);
            console.log('oops-lib002, StateService, getUsStateCityData from usStateWithCities.data.ts');
            return of(US_STATE_WITH_CITIES);
        }));
    }
    getUsStateCity() {
        return this.getUsStateCityData().pipe(
        // return this.httpClient.get('assets/mockdata/cities.json').pipe(
        // return this.httpClient.get('../data/cities.json').pipe( // angular support asset in lib since v9
        map((data) => {
            let statesData;
            let states = [];
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
        }));
    }
    getUsStateCitySlice(indexes) {
        return this.getUsStateCity().pipe(map((items) => {
            const result = [];
            items.forEach((item) => {
                if (indexes.includes(item.id)) {
                    result.push(item);
                }
            });
            return result;
        }));
    }
    getUsCities() {
        let cities = [];
        let retCities = [];
        return this.getUsStateCity().pipe(map((states) => {
            // console.log(`states: `, states);
            states.forEach((state) => {
                state.cities.forEach((cityData) => {
                    // console.log(`cityData: `, cityData);
                    const newCity = this.makeUsCityWithStateName(0, cityData.cityName, cityData.inStateName);
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
        }));
    }
    makeUsState(idx, stateName) {
        const state = {};
        state.id = idx;
        state.stateName = stateName;
        state.cities = [];
        return state;
    }
    makeUsCity(idx, cityName) {
        const city = {};
        city.id = idx;
        city.cityName = cityName;
        return city;
    }
    makeUsCityWithStateName(idx, cityName, stateName) {
        const city = this.makeUsCity(idx, cityName);
        city.inStateName = stateName;
        return city;
    }
}
StateService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: StateService, deps: [{ token: i1$1.HttpClient }], target: i0.ɵɵFactoryTarget.Injectable });
StateService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: StateService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: StateService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: function () { return [{ type: i1$1.HttpClient }]; } });

class UtilsService {
    range(start, end) {
        return [...Array(end).keys()].map(el => el + start);
    }
}
UtilsService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: UtilsService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
UtilsService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: UtilsService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: UtilsService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }] });

const WIKI_URL = 'https://en.wikipedia.org/w/api.php';
const PARAMS = new HttpParams({
    fromObject: {
        action: 'opensearch',
        format: 'json',
        origin: '*',
    },
});
class WikipediaService {
    constructor(http) {
        this.http = http;
    }
    search(term) {
        if (term === '') {
            return of([]);
        }
        return this.http
            .get(WIKI_URL, { params: PARAMS.set('search', term) })
            .pipe(map$1((response) => response[1]));
    }
}
WikipediaService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: WikipediaService, deps: [{ token: i1$1.HttpClient }], target: i0.ɵɵFactoryTarget.Injectable });
WikipediaService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: WikipediaService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: WikipediaService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1$1.HttpClient }]; } });

class SharedModule {
}
SharedModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: SharedModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
SharedModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.2.12", ngImport: i0, type: SharedModule, declarations: [HighlighterPipe,
        HighlightHtmlPipe,
        NotFoundComponent,
        FooterComponent,
        NavBarComponent,
        BackAngleComponent,
        ElementChangingDirective,
        MouseoverColorDirective], imports: [CommonModule,
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        RouterModule], exports: [HighlighterPipe,
        HighlightHtmlPipe,
        NotFoundComponent,
        NavBarComponent,
        FooterComponent,
        BackAngleComponent,
        ElementChangingDirective,
        MouseoverColorDirective] });
SharedModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: SharedModule, providers: [
        CarDataService,
        CardDataService,
        GithubService,
        SharedDataService,
        StateService,
        UtilsService,
        WikipediaService,
    ], imports: [CommonModule,
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        RouterModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: SharedModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        HighlighterPipe,
                        HighlightHtmlPipe,
                        NotFoundComponent,
                        FooterComponent,
                        NavBarComponent,
                        BackAngleComponent,
                        ElementChangingDirective,
                        MouseoverColorDirective,
                    ],
                    imports: [
                        CommonModule,
                        BrowserModule,
                        FormsModule,
                        ReactiveFormsModule,
                        HttpClientModule,
                        RouterModule,
                    ],
                    exports: [
                        HighlighterPipe,
                        HighlightHtmlPipe,
                        NotFoundComponent,
                        NavBarComponent,
                        FooterComponent,
                        BackAngleComponent,
                        ElementChangingDirective,
                        MouseoverColorDirective,
                    ],
                    providers: [
                        CarDataService,
                        CardDataService,
                        GithubService,
                        SharedDataService,
                        StateService,
                        UtilsService,
                        WikipediaService,
                    ],
                }]
        }] });

class OopsLib002Module {
}
OopsLib002Module.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: OopsLib002Module, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
OopsLib002Module.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.2.12", ngImport: i0, type: OopsLib002Module, declarations: [OopsLib002Component], imports: [SharedModule], exports: [OopsLib002Component] });
OopsLib002Module.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: OopsLib002Module, providers: [OopsLib002Service], imports: [SharedModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: OopsLib002Module, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [OopsLib002Component],
                    imports: [SharedModule],
                    exports: [OopsLib002Component],
                    providers: [OopsLib002Service],
                }]
        }] });

class GenericValidator {
    static cannotContainSpace(control) {
        if (control.value.indexOf(' ') >= 0) {
            return { cannotContainSpace: true };
            // return { minlength: {
            //         requiredLength: 10,
            //         actualLength: control.value.length
            //     }
            // };
        }
        return null;
    }
    // simulate Asynchronous operation
    static shouldBeUnique(control) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (control.value === 'oopsmails') {
                    resolve({ shouldBeUnique: true });
                }
                else {
                    return resolve(null);
                }
            }, 2000);
        });
    }
}

/*
 * Public API Surface of oops-lib002
 */

/**
 * Generated bundle index. Do not edit.
 */

export { BackAngleComponent, CarDataService, Card, CardDataService, ElementChangingDirective, FooterComponent, GenericValidator, GithubService, HighlightHtmlPipe, HighlighterPipe, MouseoverColorDirective, NavBarComponent, NavBarModel, NotFoundComponent, OopsLib002Component, OopsLib002Module, OopsLib002Service, STATE_WITH_FLAG_DATA, SharedDataService, SharedModule, StateService, US_STATE_WITH_CITIES, US_STATE_WITH_CITIES_DATA, UtilsService, WikipediaService };
//# sourceMappingURL=oops-lib002.mjs.map
