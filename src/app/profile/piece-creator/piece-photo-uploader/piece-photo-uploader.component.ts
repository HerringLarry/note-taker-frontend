import { Component, OnInit, Input } from '@angular/core';
import { UsernameService } from '../../../common/services/username.service';

@Component({
  selector: 'app-piece-photo-uploader',
  templateUrl: './piece-photo-uploader.component.html',
  styleUrls: ['./piece-photo-uploader.component.css']
})
export class PiecePhotoUploaderComponent implements OnInit {

  username = UsernameService.username;
  @Input() pieceName: string;

  constructor() { }

  ngOnInit() {
  }

}
