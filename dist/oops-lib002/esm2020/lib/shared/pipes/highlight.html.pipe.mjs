import { Pipe } from '@angular/core';
import * as i0 from "@angular/core";
export class HighlightHtmlPipe {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGlnaGxpZ2h0Lmh0bWwucGlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL29vcHMtbGliMDAyL3NyYy9saWIvc2hhcmVkL3BpcGVzL2hpZ2hsaWdodC5odG1sLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFJckMsTUFBTSxPQUFPLGlCQUFpQjtJQUM1QixTQUFTLENBQUMsSUFBWSxFQUFFLE1BQU07UUFDNUIsa0RBQWtEO1FBQ2xELHNEQUFzRDtRQUN0RCxJQUFJLENBQUMsTUFBTSxJQUFJLE1BQU0sS0FBSyxTQUFTLEVBQUU7WUFDbkMsT0FBTyxJQUFJLENBQUM7U0FDYjthQUFNO1lBQ0wsSUFBSSxPQUFPLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxxQ0FBcUMsRUFBRSxNQUFNLENBQUMsQ0FBQztZQUM1RSxPQUFPLEdBQUcsT0FBTztpQkFDZCxLQUFLLENBQUMsR0FBRyxDQUFDO2lCQUNWLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFO2dCQUNaLE9BQU8sQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7WUFDdEIsQ0FBQyxDQUFDO2lCQUNELElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNiLE9BQU8sR0FBRyxHQUFHLEdBQUcsT0FBTyxHQUFHLEdBQUcsR0FBRyxZQUFZLENBQUM7WUFDN0MsTUFBTSxLQUFLLEdBQUcsSUFBSSxNQUFNLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO1lBRXhDLE9BQU8sTUFBTTtnQkFDWCxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLDJCQUEyQixLQUFLLFNBQVMsQ0FBQztnQkFDM0UsQ0FBQyxDQUFDLElBQUksQ0FBQztTQUNWO0lBQ0gsQ0FBQzs7K0dBckJVLGlCQUFpQjs2R0FBakIsaUJBQWlCOzRGQUFqQixpQkFBaUI7a0JBRDdCLElBQUk7bUJBQUMsRUFBRSxJQUFJLEVBQUUsZUFBZSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AUGlwZSh7IG5hbWU6ICdoaWdobGlnaHRIdG1sJyB9KVxyXG5leHBvcnQgY2xhc3MgSGlnaGxpZ2h0SHRtbFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICB0cmFuc2Zvcm0odGV4dDogc3RyaW5nLCBzZWFyY2gpOiBzdHJpbmcge1xyXG4gICAgLy8gY29uc29sZS5sb2coJ0hpZ2hsaWdodEh0bWxQaXBlLCB0ZXh0OiAnLCB0ZXh0KTtcclxuICAgIC8vIGNvbnNvbGUubG9nKCdIaWdobGlnaHRIdG1sUGlwZSwgc2VhcmNoOiAnLCBzZWFyY2gpO1xyXG4gICAgaWYgKCFzZWFyY2ggfHwgc2VhcmNoID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgcmV0dXJuIHRleHQ7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBsZXQgcGF0dGVybiA9IHNlYXJjaC5yZXBsYWNlKC9bXFwtXFxbXFxdXFwvXFx7XFx9XFwoXFwpXFwqXFwrXFw/XFwuXFxcXFxcXlxcJFxcfF0vZywgJ1xcXFwkJicpO1xyXG4gICAgICBwYXR0ZXJuID0gcGF0dGVyblxyXG4gICAgICAgIC5zcGxpdCgnICcpXHJcbiAgICAgICAgLmZpbHRlcigodCkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIHQubGVuZ3RoID4gMDtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5qb2luKCd8Jyk7XHJcbiAgICAgIHBhdHRlcm4gPSAnKCcgKyBwYXR0ZXJuICsgJyknICsgJyg/IVtePF0qPiknO1xyXG4gICAgICBjb25zdCByZWdleCA9IG5ldyBSZWdFeHAocGF0dGVybiwgJ2dpJyk7XHJcblxyXG4gICAgICByZXR1cm4gc2VhcmNoXHJcbiAgICAgICAgPyB0ZXh0LnJlcGxhY2UocmVnZXgsIChtYXRjaCkgPT4gYDxzcGFuIGNsYXNzPVwiaGlnaGxpZ2h0XCI+JHttYXRjaH08L3NwYW4+YClcclxuICAgICAgICA6IHRleHQ7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==