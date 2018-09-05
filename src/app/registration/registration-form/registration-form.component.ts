import { UserInfoDto } from './dto/user-info.dto';
import { DataRequestorService } from './../../common/services/data-requestor.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {
  static mobileRegExp: string = '^(\\+\\d{1,2}\\s)?\\(?\\d{3}\\)?[\\s.-]\\d{3}[\\s.-]\\d{4}$';

  registrationFormGroup: FormGroup;

  constructor( private _dataRequestor: DataRequestorService) { }

  ngOnInit() {
    this.registrationFormGroup = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      mobile: new FormControl('', [Validators.required, Validators.pattern(RegistrationFormComponent.mobileRegExp)]),
   });
  }

  onSubmit() {
    const userInfoDto: UserInfoDto = new UserInfoDto( this.registrationFormGroup );
    if ( this.registrationFormGroup.valid) {
      this._dataRequestor.postRequest('users', userInfoDto).subscribe( result => {
        alert(result);
      });
    }
  }

}
