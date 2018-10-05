import { FormMaker } from './../../../registration/form-maker/form-maker';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-piece-form',
  templateUrl: './piece-form.component.html',
  styleUrls: ['./piece-form.component.css']
})
export class PieceFormComponent implements OnInit {

  @Input() formGroup: FormGroup;
  @Output() submitEmitter: EventEmitter<void> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    this.submitEmitter.emit();
  }

}
