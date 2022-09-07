import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { contactvalidate } from '../employee-form-validator/contactnumber';
import { pincodevalidate } from '../employee-form-validator/pincode';
import { personformdeactivate } from '../employee-service/employee-data-service';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css'],
  providers:[personformdeactivate]
})
export class EmployeeFormComponent implements OnInit {
  
  constructor(private _fb:FormBuilder) { }

  ngOnInit(): void {
    
  }
  
  employeedataformfields = this._fb.group({
    firstname:['',[Validators.required]],
    middlename:[''],
    lastname:['',[Validators.required]],
    email:['',[Validators.required,Validators.email]],
    contactnumber:['',[Validators.required,contactvalidate.contactvalidator()]],
    gender:['',[Validators.required]],
    dob:['',[Validators.required]],
    employeetype:['',[Validators.required]],
    address:['',[Validators.required]],
    pincode:['',[Validators.required,pincodevalidate.pincodevalidator()]],


  })

}
