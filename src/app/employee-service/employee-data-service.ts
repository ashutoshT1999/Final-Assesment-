import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class employeedata {
    employeeApiUrl: string = "api/employee";
    constructor(private _http: HttpClient) {

    }

    getdatabyApi(): Observable<any[]> {
        return this._http.get<any[]>(this.employeeApiUrl);
    }
}