import { DataRequestorService } from './../../../common/services/data-requestor.service';
import { PieceFormDto } from './../../piece-creator/dto/piece-form.dto';
import { Component, OnInit } from '@angular/core';
import { UsernameService } from '../../../common/services/username.service';
import { Piece } from '../helpers/piece';

@Component({
  selector: 'app-profile-body',
  templateUrl: './profile-body.component.html',
  styleUrls: ['./profile-body.component.css']
})
export class ProfileBodyComponent implements OnInit {

  pieces: Piece[];

  constructor( private _dataRequestorService: DataRequestorService ) { }

  ngOnInit() {
    this.getPieces();
  }

  getPieces() {
    this._dataRequestorService.getRequest('piece/' + UsernameService.username)
    .subscribe( (res: Piece[]) => {
      this.pieces = res;
    });
  }

}
