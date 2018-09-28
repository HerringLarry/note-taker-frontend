import { Component, OnInit, Input } from '@angular/core';
import { ImageRequestorService } from '../../../../common/services/image-requestor.service';

@Component({
  selector: 'app-profile-photo',
  templateUrl: './profile-photo.component.html',
  styleUrls: ['./profile-photo.component.css']
})
export class ProfilePhotoComponent implements OnInit {

  @Input() image: string;
  imageToShow: any;

  constructor( private _imageRequestorService: ImageRequestorService ) { }

  ngOnInit() {
    const imageUrlExtended = 'profile/profileImage/' + this.image;
    this._imageRequestorService.getImageAndSanitize( imageUrlExtended , ( image: any ) => this.imageToShow = image );
  }

}
