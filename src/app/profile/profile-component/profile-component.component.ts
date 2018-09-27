import { UsernameService } from './../../common/services/username.service';
import { Component, OnInit } from '@angular/core';
import { DataRequestorService } from '../../common/services/data-requestor.service';
import { ProfileDto } from './dto/profile.dto';

@Component({
  selector: 'app-profile-component',
  templateUrl: './profile-component.component.html',
  styleUrls: ['./profile-component.component.css']
})
export class ProfileComponent implements OnInit {

  profile: ProfileDto;

  constructor( private _dataRequestorService: DataRequestorService ) { }

  ngOnInit() {
    this._dataRequestorService.getRequest('profile/' + UsernameService.username).subscribe( (res: ProfileDto) => {
      this.profile = res;
    });
  }

  getProfilePhoto() {
    console.log('hello');
    return this._dataRequestorService.getImageRequest('profile/profileImage/82dc95722551b3d10bb97b7310c44331f3.jpg');
  }

  profileExists() {
    return !this.profile ? false : true;
  }

}
