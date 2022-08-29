import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EmployeeDataTableComponent } from './employee-data-table/employee-data-table.component';
import { EmployeeDataViewComponent } from './employee-data-view/employee-data-view.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { employeedatabyapi } from './employee-service/employee-data-service-api';
import { HttpClientModule } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import { employeedata } from './employee-service/employee-data-service';
import {MatButtonModule} from '@angular/material/button';
import { NavbarComponent } from './navbar/navbar.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeDataTableComponent,
    EmployeeDataViewComponent,
    NavbarComponent,
    EmployeeFormComponent
  ],
  imports: [
    BrowserModule,MatSelectModule,MatRadioModule,MatDatepickerModule, MatNativeDateModule,AppRoutingModule,
    AppRoutingModule,
    BrowserAnimationsModule,MatFormFieldModule,MatInputModule,HttpClientInMemoryWebApiModule.forRoot(employeedatabyapi),HttpClientModule,MatTableModule,MatButtonModule,ReactiveFormsModule

  ],
  providers: [employeedata],
  bootstrap: [AppComponent]
})
export class AppModule { }
