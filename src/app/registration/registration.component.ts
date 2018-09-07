import { DataRequestorService } from './../common/services/data-requestor.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormMaker } from './form-maker/form-maker';
import { RegistrationDto } from './dto/registration.dto';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registrationFormGroup: FormGroup;
  profileFormGroup: FormGroup;

  constructor( private _dataRequestor: DataRequestorService ) {
    this.registrationFormGroup = FormMaker.getRegistrationFormGroup();
    this.profileFormGroup = FormMaker.getProfileFormGroup();
  }

  ngOnInit() {
  }

  onSubmit(): void {
    if (this.registrationFormGroup.valid && this.profileFormGroup.valid) {
      const registrationDto: RegistrationDto = new RegistrationDto( this.registrationFormGroup, this.profileFormGroup );
      this._dataRequestor.postRequest('users', registrationDto ).subscribe( result => {
        console.log(result);
      });
    }
  }

}
