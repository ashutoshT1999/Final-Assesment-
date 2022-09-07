import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CanDeactivate } from "@angular/router";
import { Observable } from "rxjs";
import { EmployeeFormComponent } from "../employee-form/employee-form.component";

@Injectable()
export class personformdeactivate implements CanDeactivate<EmployeeFormComponent>{


    canDeactivate(component:EmployeeFormComponent):boolean{
      if(component.employeedataformfields!.dirty){
        return confirm("Are you sure you want to discard the changes ?");
      }
      else return true;
    }
}