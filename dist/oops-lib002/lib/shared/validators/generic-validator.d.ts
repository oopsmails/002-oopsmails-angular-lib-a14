import { AbstractControl, ValidationErrors } from '@angular/forms';
export declare class GenericValidator {
    static cannotContainSpace(control: AbstractControl): ValidationErrors | null;
    static shouldBeUnique(control: AbstractControl): Promise<ValidationErrors | null>;
}
