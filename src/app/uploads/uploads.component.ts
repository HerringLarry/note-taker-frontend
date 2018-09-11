import { DataRequestorService } from './../common/services/data-requestor.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ProfileDto } from './profile-form/dto/profile.dto';
import { FormMaker } from '../registration/form-maker/form-maker';

@Component({
  selector: 'app-uploads',
  templateUrl: './uploads.component.html',
  styleUrls: ['./uploads.component.css']
})
export class UploadsComponent implements OnInit {

  profileForm: FormGroup;

  constructor( private _dataRequestor: DataRequestorService ) { }

  ngOnInit() {
    this.profileForm = FormMaker.getProfileFormGroup();
  }

  onSubmit(): void {
    const profileDto: ProfileDto = new ProfileDto(this.profileForm);
    this._dataRequestor.postRequest('profile/info', profileDto).subscribe();
  }

}
