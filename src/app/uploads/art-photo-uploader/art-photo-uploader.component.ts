import { RequestParams } from './request-params/request-params';
import { Component, OnInit } from '@angular/core';
import { UsernameService } from '../../common/services/username.service';

@Component({
  selector: 'app-art-photo-uploader',
  templateUrl: './art-photo-uploader.component.html',
  styleUrls: ['./art-photo-uploader.component.css']
})
export class ArtPhotoUploaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
