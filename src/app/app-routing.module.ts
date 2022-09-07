import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { personformdeactivate } from './employee-service/employee-data-service';

const routes: Routes = [
  {path:'',component:EmployeeFormComponent, canDeactivate:[personformdeactivate]},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
