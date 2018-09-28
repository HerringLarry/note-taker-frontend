import { Component, OnInit, Input } from '@angular/core';
import { ProfileDto } from '../../dto/profile.dto';

@Component({
  selector: 'app-profile-info',
  templateUrl: './profile-info.component.html',
  styleUrls: ['./profile-info.component.css']
})
export class ProfileInfoComponent implements OnInit {

  @Input() profile: ProfileDto;
  bio: string;
  interests;

  constructor() { }

  ngOnInit() {
    this.bio = this.profile.bio;
    this.interests = this.profile.interests;
  }

}
