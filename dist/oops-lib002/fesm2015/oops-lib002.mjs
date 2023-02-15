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
        console.log('--------------------------------------');
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

class StateService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.statesWithFlag$ = this.httpClient //
            .get('assets/mockdata/statesWithFlag.json');
    }
    getUsStates() {
        return this.statesWithFlag$;
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
    getUsStateCity() {
        return this.httpClient.get('../data/cities.json').pipe(map((data) => {
            let statesData;
            let states = [];
            console.log('llllLoading states and cities ..... ', data);
            if (data) {
                statesData = Object.entries(data).sort();
                let sIdx = 0;
                statesData.forEach((stateData) => {
                    console.log(`stateData[0]: `, stateData[0]);
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

export { BackAngleComponent, CarDataService, Card, CardDataService, ElementChangingDirective, FooterComponent, GenericValidator, GithubService, HighlightHtmlPipe, HighlighterPipe, MouseoverColorDirective, NavBarComponent, NavBarModel, NotFoundComponent, OopsLib002Component, OopsLib002Module, OopsLib002Service, SharedDataService, SharedModule, StateService, UtilsService, WikipediaService };
//# sourceMappingURL=oops-lib002.mjs.map
