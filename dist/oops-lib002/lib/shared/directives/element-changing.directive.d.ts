import { ElementRef, OnChanges, Renderer2, SimpleChanges } from '@angular/core';
import * as i0 from "@angular/core";
export declare class ElementChangingDirective implements OnChanges {
    private elRef;
    private renderer;
    elementChanging: boolean;
    constructor(elRef: ElementRef, renderer: Renderer2);
    ngOnChanges(changes: SimpleChanges): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ElementChangingDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<ElementChangingDirective, "[elementChanging]", never, { "elementChanging": "elementChanging"; }, {}, never, never, false>;
}
