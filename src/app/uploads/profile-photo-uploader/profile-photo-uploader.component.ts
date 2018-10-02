import { Component, OnInit } from '@angular/core';
import { UsernameService } from '../../common/services/username.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-photo-uploader',
  templateUrl: './profile-photo-uploader.component.html',
  styleUrls: ['./profile-photo-uploader.component.css']
})
export class ProfilePhotoUploaderComponent implements OnInit {

  username = UsernameService.username;

  constructor( private _router: Router) { }

  ngOnInit() {
  }

  goToProfile() {
    console.log('profile');
    this._router.navigate(['profile']);
  }

}
