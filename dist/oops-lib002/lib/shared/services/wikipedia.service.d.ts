import { HttpClient } from '@angular/common/http';
import * as i0 from "@angular/core";
export declare class WikipediaService {
    private http;
    constructor(http: HttpClient);
    search(term: string): import("rxjs").Observable<any[]>;
    static ɵfac: i0.ɵɵFactoryDeclaration<WikipediaService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<WikipediaService>;
}
