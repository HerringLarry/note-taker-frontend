import { Component, OnInit, Input } from '@angular/core';
import { ImageRequestorService } from '../../../../common/services/image-requestor.service';
import { Piece } from '../../helpers/piece';

@Component({
  selector: 'app-piece-tile',
  templateUrl: './piece-tile.component.html',
  styleUrls: ['./piece-tile.component.css']
})
export class PieceTileComponent implements OnInit {

  @Input() piece: Piece;
  imageToShow: any;

  constructor( private _imageRequestorService: ImageRequestorService) {
  }

  ngOnInit() {
    const imageUrlExtended = 'piece/photo/' + this.piece.piecePhotoURL;
    this._imageRequestorService.getImageAndSanitize( imageUrlExtended , ( image: any ) => {
      console.log('successer');
      this.imageToShow = image;
    });
  }

}
