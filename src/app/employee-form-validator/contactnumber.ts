import { AbstractControl } from "@angular/forms";

export class contactvalidate {

    static contactvalidator() {
        return (control: AbstractControl): { [key: string]: any } | null => {
            console.log((control.value).length);
            if ((control.value).length == 10) return null;
            else return { 'invalidcontact': true };
        }
    }
}