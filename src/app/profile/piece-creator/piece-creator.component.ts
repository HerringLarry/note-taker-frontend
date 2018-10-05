import { FormMaker } from './../../registration/form-maker/form-maker';
import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { DataRequestorService } from '../../common/services/data-requestor.service';
import { UsernameService } from '../../common/services/username.service';
import { PieceFormDto } from './dto/piece-form.dto';

@Component({
  selector: 'app-piece-creator',
  templateUrl: './piece-creator.component.html',
  styleUrls: ['./piece-creator.component.css']
})
export class PieceCreatorComponent implements OnInit {

  pieceDetailsFormGroup: FormGroup;
  readyToAddPhoto: boolean = false;

  constructor( private _dataRequestor: DataRequestorService ) { }

  ngOnInit() {
    this.pieceDetailsFormGroup = FormMaker.getPieceCreatorFormGroup();
  }

  onSubmit() {
    if ( this.pieceDetailsFormGroup.valid ) {
      this._dataRequestor.postRequest('piece/create/' + UsernameService.username, new PieceFormDto( this.pieceDetailsFormGroup) )
      .subscribe( res => {
        this.readyToAddPhoto = true;
      });
    }
  }

}
