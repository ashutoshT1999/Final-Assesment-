import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { contactvalidate } from '../employee-form-validator/contactnumber';
import { pincodevalidate } from '../employee-form-validator/pincode';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
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
