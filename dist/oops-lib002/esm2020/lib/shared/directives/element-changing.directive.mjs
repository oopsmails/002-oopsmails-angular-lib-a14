import { Directive, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class ElementChangingDirective {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWxlbWVudC1jaGFuZ2luZy5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9vb3BzLWxpYjAwMi9zcmMvbGliL3NoYXJlZC9kaXJlY3RpdmVzL2VsZW1lbnQtY2hhbmdpbmcuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQWMsS0FBSyxFQUF1QyxNQUFNLGVBQWUsQ0FBQzs7QUFLbEcsTUFBTSxPQUFPLHdCQUF3QjtJQUduQyxZQUFvQixLQUFpQixFQUFVLFFBQW1CO1FBQTlDLFVBQUssR0FBTCxLQUFLLENBQVk7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBRnpELG9CQUFlLEdBQUcsS0FBSyxDQUFDO0lBRW9DLENBQUM7SUFFdEUsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDbEUsbUVBQW1FO1FBQ25FLElBQUksT0FBTyxDQUFDLGlCQUFpQixDQUFDLENBQUMsWUFBWSxFQUFFO1lBQzNDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUM7U0FDakQ7YUFBTTtZQUNMLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxPQUFPLEVBQUUsUUFBUSxDQUFDLENBQUM7U0FDbkQ7SUFDSCxDQUFDOztzSEFiVSx3QkFBd0I7MEdBQXhCLHdCQUF3Qjs0RkFBeEIsd0JBQXdCO2tCQUhwQyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxtQkFBbUI7aUJBQzlCO3lIQUVVLGVBQWU7c0JBQXZCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIElucHV0LCBPbkNoYW5nZXMsIFJlbmRlcmVyMiwgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbZWxlbWVudENoYW5naW5nXScsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBFbGVtZW50Q2hhbmdpbmdEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xyXG4gIEBJbnB1dCgpIGVsZW1lbnRDaGFuZ2luZyA9IGZhbHNlO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsUmVmOiBFbGVtZW50UmVmLCBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHt9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcclxuICAgIGNvbnN0IHBhcmVudCA9IHRoaXMucmVuZGVyZXIucGFyZW50Tm9kZSh0aGlzLmVsUmVmLm5hdGl2ZUVsZW1lbnQpO1xyXG4gICAgLy8gaWYgKGNoYW5nZXMuZWxlbWVudENoYW5naW5nLmN1cnJlbnRWYWx1ZSkgeyAvLyBiZWZvcmUgQW5ndWxhciAxM1xyXG4gICAgaWYgKGNoYW5nZXNbJ2VsZW1lbnRDaGFuZ2luZyddLmN1cnJlbnRWYWx1ZSkge1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHBhcmVudCwgJ2NvbG9yJywgJ2JsdWUnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUocGFyZW50LCAnY29sb3InLCAneWVsbG93Jyk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==