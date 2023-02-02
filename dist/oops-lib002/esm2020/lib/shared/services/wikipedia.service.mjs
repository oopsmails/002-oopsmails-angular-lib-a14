import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
const WIKI_URL = 'https://en.wikipedia.org/w/api.php';
const PARAMS = new HttpParams({
    fromObject: {
        action: 'opensearch',
        format: 'json',
        origin: '*',
    },
});
export class WikipediaService {
    constructor(http) {
        this.http = http;
    }
    search(term) {
        if (term === '') {
            return of([]);
        }
        return this.http
            .get(WIKI_URL, { params: PARAMS.set('search', term) })
            .pipe(map((response) => response[1]));
    }
}
WikipediaService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: WikipediaService, deps: [{ token: i1.HttpClient }], target: i0.ɵɵFactoryTarget.Injectable });
WikipediaService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: WikipediaService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: WikipediaService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1.HttpClient }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lraXBlZGlhLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9vb3BzLWxpYjAwMi9zcmMvbGliL3NoYXJlZC9zZXJ2aWNlcy93aWtpcGVkaWEuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQWMsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDOUQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzFCLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7O0FBRXJDLE1BQU0sUUFBUSxHQUFHLG9DQUFvQyxDQUFDO0FBQ3RELE1BQU0sTUFBTSxHQUFHLElBQUksVUFBVSxDQUFDO0lBQzVCLFVBQVUsRUFBRTtRQUNWLE1BQU0sRUFBRSxZQUFZO1FBQ3BCLE1BQU0sRUFBRSxNQUFNO1FBQ2QsTUFBTSxFQUFFLEdBQUc7S0FDWjtDQUNGLENBQUMsQ0FBQztBQUdILE1BQU0sT0FBTyxnQkFBZ0I7SUFDM0IsWUFBb0IsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtJQUFHLENBQUM7SUFFeEMsTUFBTSxDQUFDLElBQVk7UUFDakIsSUFBSSxJQUFJLEtBQUssRUFBRSxFQUFFO1lBQ2YsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDZjtRQUVELE9BQU8sSUFBSSxDQUFDLElBQUk7YUFDYixHQUFHLENBQWtCLFFBQVEsRUFBRSxFQUFFLE1BQU0sRUFBRSxNQUFNLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDO2FBQ3RFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDMUMsQ0FBQzs7OEdBWFUsZ0JBQWdCO2tIQUFoQixnQkFBZ0I7NEZBQWhCLGdCQUFnQjtrQkFENUIsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBQYXJhbXMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgb2YgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuY29uc3QgV0lLSV9VUkwgPSAnaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3cvYXBpLnBocCc7XHJcbmNvbnN0IFBBUkFNUyA9IG5ldyBIdHRwUGFyYW1zKHtcclxuICBmcm9tT2JqZWN0OiB7XHJcbiAgICBhY3Rpb246ICdvcGVuc2VhcmNoJyxcclxuICAgIGZvcm1hdDogJ2pzb24nLFxyXG4gICAgb3JpZ2luOiAnKicsXHJcbiAgfSxcclxufSk7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBXaWtpcGVkaWFTZXJ2aWNlIHtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHt9XHJcblxyXG4gIHNlYXJjaCh0ZXJtOiBzdHJpbmcpIHtcclxuICAgIGlmICh0ZXJtID09PSAnJykge1xyXG4gICAgICByZXR1cm4gb2YoW10pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzLmh0dHBcclxuICAgICAgLmdldDxbYW55LCBzdHJpbmdbXV0+KFdJS0lfVVJMLCB7IHBhcmFtczogUEFSQU1TLnNldCgnc2VhcmNoJywgdGVybSkgfSlcclxuICAgICAgLnBpcGUobWFwKChyZXNwb25zZSkgPT4gcmVzcG9uc2VbMV0pKTtcclxuICB9XHJcbn1cclxuIl19