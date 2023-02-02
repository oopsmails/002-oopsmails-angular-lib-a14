import { Directive, HostListener, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class MouseoverColorDirective {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW91c2VvdmVyLWNvbG9yLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL29vcHMtbGliMDAyL3NyYy9saWIvc2hhcmVkL2RpcmVjdGl2ZXMvbW91c2VvdmVyLWNvbG9yLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFjLFlBQVksRUFBRSxLQUFLLEVBQWEsTUFBTSxlQUFlLENBQUM7O0FBS3RGLE1BQU0sT0FBTyx1QkFBdUI7SUFHbEMsWUFBb0IsS0FBaUIsRUFBVSxRQUFtQjtRQUE5QyxVQUFLLEdBQUwsS0FBSyxDQUFZO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUZ6QyxjQUFTLEdBQVksS0FBSyxDQUFDO0lBRWtCLENBQUM7SUFFNUMsV0FBVztRQUNwQyxNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ2xFLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNsQixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQ2hEO0lBQ0gsQ0FBQztJQUV5QixVQUFVO1FBQ2xDLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDbEUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLE9BQU8sRUFBRSxFQUFFLENBQUMsQ0FBQztJQUM5QyxDQUFDOztxSEFmVSx1QkFBdUI7eUdBQXZCLHVCQUF1Qjs0RkFBdkIsdUJBQXVCO2tCQUhuQyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxrQkFBa0I7aUJBQzdCO3lIQUUwQixTQUFTO3NCQUFqQyxLQUFLO3VCQUFDLGdCQUFnQjtnQkFJSSxXQUFXO3NCQUFyQyxZQUFZO3VCQUFDLFdBQVc7Z0JBT0MsVUFBVTtzQkFBbkMsWUFBWTt1QkFBQyxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBIb3N0TGlzdGVuZXIsIElucHV0LCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW21vdXNlT3ZlckNvbG9yXSdcclxufSlcclxuZXhwb3J0IGNsYXNzIE1vdXNlb3ZlckNvbG9yRGlyZWN0aXZlIHtcclxuICBASW5wdXQoJ21vdXNlT3ZlckNvbG9yJykgaXNMb2FkaW5nOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxSZWY6IEVsZW1lbnRSZWYsIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMikgeyB9XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ21vdXNlb3ZlcicpIG9uTW91c2VPdmVyKCkge1xyXG4gICAgY29uc3QgcGFyZW50ID0gdGhpcy5yZW5kZXJlci5wYXJlbnROb2RlKHRoaXMuZWxSZWYubmF0aXZlRWxlbWVudCk7XHJcbiAgICBpZiAodGhpcy5pc0xvYWRpbmcpIHtcclxuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShwYXJlbnQsICdjb2xvcicsICdyZWQnKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ21vdXNlb3V0Jykgb25Nb3VzZU91dCgpIHtcclxuICAgIGNvbnN0IHBhcmVudCA9IHRoaXMucmVuZGVyZXIucGFyZW50Tm9kZSh0aGlzLmVsUmVmLm5hdGl2ZUVsZW1lbnQpO1xyXG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShwYXJlbnQsICdjb2xvcicsICcnKTtcclxuICB9XHJcblxyXG59XHJcblxyXG4iXX0=