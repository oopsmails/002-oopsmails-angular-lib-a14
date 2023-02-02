import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class UtilsService {
    range(start, end) {
        return [...Array(end).keys()].map(el => el + start);
    }
}
UtilsService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: UtilsService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
UtilsService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: UtilsService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: UtilsService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL29vcHMtbGliMDAyL3NyYy9saWIvc2hhcmVkL3NlcnZpY2VzL3V0aWxzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFLM0MsTUFBTSxPQUFPLFlBQVk7SUFDckIsS0FBSyxDQUFDLEtBQWEsRUFBRSxHQUFXO1FBQzVCLE9BQU8sQ0FBQyxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxLQUFLLENBQUMsQ0FBQTtJQUN2RCxDQUFDOzswR0FIUSxZQUFZOzhHQUFaLFlBQVksY0FGVCxNQUFNOzRGQUVULFlBQVk7a0JBSHhCLFVBQVU7bUJBQUM7b0JBQ1IsVUFBVSxFQUFFLE1BQU07aUJBQ3JCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gICAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgVXRpbHNTZXJ2aWNlIHtcclxuICAgIHJhbmdlKHN0YXJ0OiBudW1iZXIsIGVuZDogbnVtYmVyKTogbnVtYmVyW10ge1xyXG4gICAgICAgIHJldHVybiBbLi4uQXJyYXkoZW5kKS5rZXlzKCldLm1hcChlbCA9PiBlbCArIHN0YXJ0KVxyXG4gICAgfVxyXG59Il19