import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditcandidateComponent } from './edit candidate/editcandidate.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { personformdeactivate } from './employee-service/employee-data-service';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  {path:'', component:EmployeeFormComponent, canDeactivate:[personformdeactivate]},
  {path: '#', component:PagenotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
