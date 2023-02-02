import { Pipe } from '@angular/core';
import * as i0 from "@angular/core";
export class HighlighterPipe {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGlnaGxpZ2h0ZXIucGlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL29vcHMtbGliMDAyL3NyYy9saWIvc2hhcmVkL3BpcGVzL2hpZ2hsaWdodGVyLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7O0FBS3BELE1BQU0sT0FBTyxlQUFlO0lBQzFCLFNBQVMsQ0FBQyxLQUFVLEVBQUUsSUFBUyxFQUFFLElBQVk7UUFDM0MsaURBQWlEO1FBQ2pELElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDVCxPQUFPLEtBQUssQ0FBQztTQUNkO1FBRUQsSUFBSSxJQUFJLEtBQUssTUFBTSxFQUFFO1lBQ25CLE1BQU0sRUFBRSxHQUFHLElBQUksTUFBTSxDQUFDLE1BQU0sR0FBRyxJQUFJLEdBQUcsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQ3JELEtBQUssR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRSwwQ0FBMEMsQ0FBQyxDQUFDO1NBQ3ZFO2FBQU07WUFDTCxNQUFNLEVBQUUsR0FBRyxJQUFJLE1BQU0sQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDbkMsS0FBSyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFLDBDQUEwQyxDQUFDLENBQUM7U0FDdkU7UUFFRCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7OzZHQWhCVSxlQUFlOzJHQUFmLGVBQWU7NEZBQWYsZUFBZTtrQkFIM0IsSUFBSTttQkFBQztvQkFDSixJQUFJLEVBQUUsYUFBYTtpQkFDcEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AUGlwZSh7XHJcbiAgbmFtZTogJ2hpZ2hsaWdodGVyJyxcclxufSlcclxuZXhwb3J0IGNsYXNzIEhpZ2hsaWdodGVyUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG4gIHRyYW5zZm9ybSh2YWx1ZTogYW55LCBhcmdzOiBhbnksIHR5cGU6IHN0cmluZyk6IHVua25vd24ge1xyXG4gICAgLy8gY29uc29sZS5sb2coJ0hpZ2hsaWdodGVyUGlwZSwgJywgdmFsdWUsIGFyZ3MpO1xyXG4gICAgaWYgKCFhcmdzKSB7XHJcbiAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodHlwZSA9PT0gJ2Z1bGwnKSB7XHJcbiAgICAgIGNvbnN0IHJlID0gbmV3IFJlZ0V4cCgnXFxcXGIoJyArIGFyZ3MgKyAnXFxcXGIpJywgJ2lnbScpO1xyXG4gICAgICB2YWx1ZSA9IHZhbHVlLnJlcGxhY2UocmUsICc8c3BhbiBjbGFzcz1cImhpZ2hsaWdodGVkLXRleHRcIj4kMTwvc3Bhbj4nKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IHJlID0gbmV3IFJlZ0V4cChhcmdzLCAnaWdtJyk7XHJcbiAgICAgIHZhbHVlID0gdmFsdWUucmVwbGFjZShyZSwgJzxzcGFuIGNsYXNzPVwiaGlnaGxpZ2h0ZWQtdGV4dFwiPiQmPC9zcGFuPicpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB2YWx1ZTtcclxuICB9XHJcbn1cclxuIl19