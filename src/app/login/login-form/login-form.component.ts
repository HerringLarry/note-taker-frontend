import { DataRequestorService } from './../../common/services/data-requestor.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  loginFormGroup: FormGroup;
  formBuilder: FormBuilder;


  constructor( private _dataRequestorService: DataRequestorService) { }

  ngOnInit() {
    this.loginFormGroup = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
   });
  }

  onSubmit() {
    if ( this.loginFormGroup.valid) {
      // this._dataRequestorService.getRequest()
    }
  }

}
