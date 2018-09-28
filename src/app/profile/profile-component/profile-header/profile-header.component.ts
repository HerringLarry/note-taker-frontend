import { DataRequestorService } from './../../../common/services/data-requestor.service';
import { Component, OnInit } from '@angular/core';
import { ProfileDto } from '../dto/profile.dto';
import { UsernameService } from '../../../common/services/username.service';

@Component({
  selector: 'app-profile-header',
  templateUrl: './profile-header.component.html',
  styleUrls: ['./profile-header.component.css']
})
export class ProfileHeaderComponent implements OnInit {

  profile: ProfileDto;
  imageUrl: string;

  constructor( private _dataRequestorService: DataRequestorService ) { }

  ngOnInit() {
    this._dataRequestorService.getRequest('profile/' + UsernameService.username).subscribe( (res: ProfileDto) => {
      this.profile = res;
      this.imageUrl = this.profile.profilePhoto;
    });
  }

}
