import { Component, OnInit } from '@angular/core';
import { employeedata } from '../employee-service/employee-data-service';

@Component({
  selector: 'app-employee-data-table',
  templateUrl: './employee-data-table.component.html',
  styleUrls: ['./employee-data-table.component.css']
})
export class EmployeeDataTableComponent implements OnInit {

  constructor(private _employeedata:employeedata) { }
  employeedatabyApi:any[]=[];
  ngOnInit(): void {
    this._employeedata.getdatabyApi().subscribe((data:any[])=>{
      this.employeedatabyApi = data;
    })
  }
  displayedColumns: string[] = ['fullname','email','contactnumber','pincode','gender','employeetype','Action(s)'];
  

}
