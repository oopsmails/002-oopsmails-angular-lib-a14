import { Injectable } from '@angular/core';
import { of, Subject } from 'rxjs';
import { Card } from '../models/shared.model';
import * as i0 from "@angular/core";
export class CardDataService {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvb29wcy1saWIwMDIvc3JjL2xpYi9zaGFyZWQvc2VydmljZXMvY2FyZC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFDdEQsT0FBTyxFQUFjLEVBQUUsRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0MsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLHdCQUF3QixDQUFDOztBQUs5QyxNQUFNLE9BQU8sZUFBZTtJQVkxQjtRQVhPLFVBQUssR0FBRztZQUNiLElBQUksSUFBSSxDQUFDLHVEQUF1RCxFQUFFLHFCQUFxQixDQUFDO1lBQ3hGLElBQUksSUFBSSxDQUNOLDJEQUEyRCxFQUMzRCwwQkFBMEIsQ0FDM0I7WUFDRCxJQUFJLElBQUksQ0FBQyxxQ0FBcUMsRUFBRSxtQ0FBbUMsQ0FBQztTQUNyRixDQUFDO1FBRU0sZUFBVSxHQUFxQixJQUFJLE9BQU8sRUFBRSxDQUFDO0lBRXRDLENBQUM7SUFFaEIsUUFBUTtRQUNOLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN4QixDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzNCLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDN0IsQ0FBQzs7NkdBckJVLGVBQWU7aUhBQWYsZUFBZSxjQUZkLE1BQU07NEZBRVAsZUFBZTtrQkFIM0IsVUFBVTttQkFBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgQ2FyZCB9IGZyb20gJy4uL21vZGVscy9zaGFyZWQubW9kZWwnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290JyxcclxufSlcclxuZXhwb3J0IGNsYXNzIENhcmREYXRhU2VydmljZSBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XHJcbiAgcHVibGljIGNhcmRzID0gW1xyXG4gICAgbmV3IENhcmQoJ1doYXQgZGlkIHRoZSBjaGVlc2Ugc2F5IHdoZW4gaXQgbG9va2VkIGluIHRoZSBtaXJyb3I/JywgJ0hlbGxvLW1lIChIYWxsb3VtaSknKSxcclxuICAgIG5ldyBDYXJkKFxyXG4gICAgICAnV2hhdCBraW5kIG9mIGNoZWVzZSBkbyB5b3UgdXNlIHRvIGRpc2d1aXNlIGEgc21hbGwgaG9yc2U/JyxcclxuICAgICAgJ01hc2stYS1wb255IChNYXNjYXJwb25lKSdcclxuICAgICksXHJcbiAgICBuZXcgQ2FyZCgnQSBraWQgdGhyZXcgYSBsdW1wIG9mIGNoZWRkYXIgYXQgbWUnLCBcIkkgdGhvdWdodCAnVGhhdCdzIG5vdCB2ZXJ5IG1hdHVyZVwiKSxcclxuICBdO1xyXG5cclxuICBwcml2YXRlIG9uRGVzdHJveSQ6IFN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgU3ViamVjdCgpO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG4gIGdldENhcmRzKCk6IE9ic2VydmFibGU8Q2FyZFtdPiB7XHJcbiAgICByZXR1cm4gb2YodGhpcy5jYXJkcyk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMub25EZXN0cm95JC5uZXh0KHRydWUpO1xyXG4gICAgdGhpcy5vbkRlc3Ryb3kkLmNvbXBsZXRlKCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==