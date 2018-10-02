import { HttpClient } from '@angular/common/http';
import { UsernameService } from './../../common/services/username.service';
import { Component, OnInit } from '@angular/core';
import { DataRequestorService } from '../../common/services/data-requestor.service';
import { ProfileDto } from './dto/profile.dto';
import { Observable } from 'rxjs';
import { DomSanitizer} from '@angular/platform-browser';
import { ImageRequestorService } from '../../common/services/image-requestor.service';


@Component({
  selector: 'app-profile-component',
  templateUrl: './profile-component.component.html',
  styleUrls: ['./profile-component.component.css']
})
export class ProfileComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    }

}
