import { AbstractControl } from "@angular/forms";

export class pincodevalidate {

    static pincodevalidator() {
        return (control: AbstractControl): { [key: string]: any } | null => {
           
            if ((control.value).length == 6) return null;
            else return { 'invalidpincode': true };
        }
    }
}