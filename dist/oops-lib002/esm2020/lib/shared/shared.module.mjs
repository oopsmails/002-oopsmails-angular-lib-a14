import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { BackAngleComponent } from './components/back-angle/back.angle.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ElementChangingDirective } from './directives/element-changing.directive';
import { MouseoverColorDirective } from './directives/mouseover-color.directive';
import { HighlightHtmlPipe } from './pipes/highlight.html.pipe';
import { HighlighterPipe } from './pipes/highlighter.pipe';
import { CarDataService } from './services/car.service';
import { CardDataService } from './services/card.service';
import { GithubService } from './services/github.service';
import { SharedDataService } from './services/shared.data.service';
import { StateService } from './services/state.service';
import { UtilsService } from './services/utils.service';
import { WikipediaService } from './services/wikipedia.service';
import * as i0 from "@angular/core";
export class SharedModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmVkLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL29vcHMtbGliMDAyL3NyYy9saWIvc2hhcmVkL3NoYXJlZC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sOENBQThDLENBQUM7QUFDbEYsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUN6RSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUMvRSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUNuRixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUNqRixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3hELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDbkUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQzs7QUF5Q2hFLE1BQU0sT0FBTyxZQUFZOzswR0FBWixZQUFZOzJHQUFaLFlBQVksaUJBckNyQixlQUFlO1FBQ2YsaUJBQWlCO1FBQ2pCLGlCQUFpQjtRQUNqQixlQUFlO1FBQ2YsZUFBZTtRQUNmLGtCQUFrQjtRQUNsQix3QkFBd0I7UUFDeEIsdUJBQXVCLGFBR3ZCLFlBQVk7UUFDWixhQUFhO1FBQ2IsV0FBVztRQUNYLG1CQUFtQjtRQUNuQixnQkFBZ0I7UUFDaEIsWUFBWSxhQUdaLGVBQWU7UUFDZixpQkFBaUI7UUFDakIsaUJBQWlCO1FBQ2pCLGVBQWU7UUFDZixlQUFlO1FBQ2Ysa0JBQWtCO1FBQ2xCLHdCQUF3QjtRQUN4Qix1QkFBdUI7MkdBWWQsWUFBWSxhQVZaO1FBQ1QsY0FBYztRQUNkLGVBQWU7UUFDZixhQUFhO1FBQ2IsaUJBQWlCO1FBQ2pCLFlBQVk7UUFDWixZQUFZO1FBQ1osZ0JBQWdCO0tBQ2pCLFlBekJDLFlBQVk7UUFDWixhQUFhO1FBQ2IsV0FBVztRQUNYLG1CQUFtQjtRQUNuQixnQkFBZ0I7UUFDaEIsWUFBWTs0RkFzQkgsWUFBWTtrQkF2Q3hCLFFBQVE7bUJBQUM7b0JBQ1IsWUFBWSxFQUFFO3dCQUNaLGVBQWU7d0JBQ2YsaUJBQWlCO3dCQUNqQixpQkFBaUI7d0JBQ2pCLGVBQWU7d0JBQ2YsZUFBZTt3QkFDZixrQkFBa0I7d0JBQ2xCLHdCQUF3Qjt3QkFDeEIsdUJBQXVCO3FCQUN4QjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixhQUFhO3dCQUNiLFdBQVc7d0JBQ1gsbUJBQW1CO3dCQUNuQixnQkFBZ0I7d0JBQ2hCLFlBQVk7cUJBQ2I7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLGVBQWU7d0JBQ2YsaUJBQWlCO3dCQUNqQixpQkFBaUI7d0JBQ2pCLGVBQWU7d0JBQ2YsZUFBZTt3QkFDZixrQkFBa0I7d0JBQ2xCLHdCQUF3Qjt3QkFDeEIsdUJBQXVCO3FCQUN4QjtvQkFDRCxTQUFTLEVBQUU7d0JBQ1QsY0FBYzt3QkFDZCxlQUFlO3dCQUNmLGFBQWE7d0JBQ2IsaUJBQWlCO3dCQUNqQixZQUFZO3dCQUNaLFlBQVk7d0JBQ1osZ0JBQWdCO3FCQUNqQjtpQkFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBCcm93c2VyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XHJcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IEJhY2tBbmdsZUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9iYWNrLWFuZ2xlL2JhY2suYW5nbGUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRm9vdGVyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTmF2QmFyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL25hdi1iYXIvbmF2LWJhci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBOb3RGb3VuZENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9ub3QtZm91bmQvbm90LWZvdW5kLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEVsZW1lbnRDaGFuZ2luZ0RpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy9lbGVtZW50LWNoYW5naW5nLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IE1vdXNlb3ZlckNvbG9yRGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL21vdXNlb3Zlci1jb2xvci5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBIaWdobGlnaHRIdG1sUGlwZSB9IGZyb20gJy4vcGlwZXMvaGlnaGxpZ2h0Lmh0bWwucGlwZSc7XHJcbmltcG9ydCB7IEhpZ2hsaWdodGVyUGlwZSB9IGZyb20gJy4vcGlwZXMvaGlnaGxpZ2h0ZXIucGlwZSc7XHJcbmltcG9ydCB7IENhckRhdGFTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9jYXIuc2VydmljZSc7XHJcbmltcG9ydCB7IENhcmREYXRhU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvY2FyZC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgR2l0aHViU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvZ2l0aHViLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBTaGFyZWREYXRhU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvc2hhcmVkLmRhdGEuc2VydmljZSc7XHJcbmltcG9ydCB7IFN0YXRlU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvc3RhdGUuc2VydmljZSc7XHJcbmltcG9ydCB7IFV0aWxzU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvdXRpbHMuc2VydmljZSc7XHJcbmltcG9ydCB7IFdpa2lwZWRpYVNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL3dpa2lwZWRpYS5zZXJ2aWNlJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBIaWdobGlnaHRlclBpcGUsXHJcbiAgICBIaWdobGlnaHRIdG1sUGlwZSxcclxuICAgIE5vdEZvdW5kQ29tcG9uZW50LFxyXG4gICAgRm9vdGVyQ29tcG9uZW50LFxyXG4gICAgTmF2QmFyQ29tcG9uZW50LFxyXG4gICAgQmFja0FuZ2xlQ29tcG9uZW50LFxyXG4gICAgRWxlbWVudENoYW5naW5nRGlyZWN0aXZlLFxyXG4gICAgTW91c2VvdmVyQ29sb3JEaXJlY3RpdmUsXHJcbiAgXSxcclxuICBpbXBvcnRzOiBbXHJcbiAgICBDb21tb25Nb2R1bGUsXHJcbiAgICBCcm93c2VyTW9kdWxlLFxyXG4gICAgRm9ybXNNb2R1bGUsXHJcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxyXG4gICAgSHR0cENsaWVudE1vZHVsZSxcclxuICAgIFJvdXRlck1vZHVsZSxcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIEhpZ2hsaWdodGVyUGlwZSxcclxuICAgIEhpZ2hsaWdodEh0bWxQaXBlLFxyXG4gICAgTm90Rm91bmRDb21wb25lbnQsXHJcbiAgICBOYXZCYXJDb21wb25lbnQsXHJcbiAgICBGb290ZXJDb21wb25lbnQsXHJcbiAgICBCYWNrQW5nbGVDb21wb25lbnQsXHJcbiAgICBFbGVtZW50Q2hhbmdpbmdEaXJlY3RpdmUsXHJcbiAgICBNb3VzZW92ZXJDb2xvckRpcmVjdGl2ZSxcclxuICBdLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAgQ2FyRGF0YVNlcnZpY2UsXHJcbiAgICBDYXJkRGF0YVNlcnZpY2UsXHJcbiAgICBHaXRodWJTZXJ2aWNlLFxyXG4gICAgU2hhcmVkRGF0YVNlcnZpY2UsXHJcbiAgICBTdGF0ZVNlcnZpY2UsXHJcbiAgICBVdGlsc1NlcnZpY2UsXHJcbiAgICBXaWtpcGVkaWFTZXJ2aWNlLFxyXG4gIF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTaGFyZWRNb2R1bGUge31cclxuIl19