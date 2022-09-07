import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-editcandidate',
  templateUrl: './editcandidate.component.html',
  styleUrls: ['./editcandidate.component.css']
})
export class EditcandidateComponent implements OnInit {

 editcandidate!:FormGroup;
  constructor(private _fb: FormBuilder) { }

  ngOnInit(): void {

    this.editcandidate = this._fb.group({
      ID:'',
      Password: [''],
      Firstname: ['',[Validators.required]],
      Middlename: [''],
      Lastname: ['',[Validators.required]],
      Email: ['',[Validators.required,Validators.email]],
      DOB: ['',[Validators.required]],
      Resume: [''],
      ContactNumber: [,[Validators.required,Validators.minLength(10),Validators.maxLength(10)]],
      Bio: ['',[Validators.required]],
      Education: ['',[Validators.required]],
      Location: ['',[Validators.required]],
    }) ;
  }
  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }





}
