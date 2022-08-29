import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeDataTableComponent } from './employee-data-table/employee-data-table.component';
import { EmployeeDataViewComponent } from './employee-data-view/employee-data-view.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';

const routes: Routes = [
  {path:'',component:EmployeeFormComponent},
  {path:'table',component:EmployeeDataTableComponent},
  { path:'view/:id',component:EmployeeDataViewComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
