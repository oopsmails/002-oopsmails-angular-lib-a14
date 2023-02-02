import { ElementRef, Renderer2 } from '@angular/core';
import * as i0 from "@angular/core";
export declare class MouseoverColorDirective {
    private elRef;
    private renderer;
    isLoading: boolean;
    constructor(elRef: ElementRef, renderer: Renderer2);
    onMouseOver(): void;
    onMouseOut(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<MouseoverColorDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<MouseoverColorDirective, "[mouseOverColor]", never, { "isLoading": "mouseOverColor"; }, {}, never, never, false>;
}
