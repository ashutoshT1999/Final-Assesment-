import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { employeedata } from '../employee-service/employee-data-service';

@Component({
  selector: 'app-employee-data-view',
  templateUrl: './employee-data-view.component.html',
  styleUrls: ['./employee-data-view.component.css']
})
export class EmployeeDataViewComponent implements OnInit {

  tabledata: any[] = [];
  constructor(private _data: employeedata, private _route: ActivatedRoute) { }


  ngOnInit(): void {
    // this._data.getdata().subscribe((data) => this.productdata = data.filter(x => x.productCode == this._route.snapshot.paramMap.get('id')));
    this._data.getdatabyApi().subscribe((data) => {
      this.tabledata = data.filter(x => x.code == this._route.snapshot.paramMap.get('id'));
      console.log(this.tabledata);
    })
  }
  displayedColumns: string[] = ['fullname','email','contactnumber','pincode','gender','employeetype'];
}
