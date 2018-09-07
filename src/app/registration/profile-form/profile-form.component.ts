import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.css']
})
export class ProfileFormComponent implements OnInit {

  @Input() formGroup: FormGroup;

  @Output() submitEmitter: EventEmitter<void> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onSubmit(): void {
    this.submitEmitter.emit(null);
  }

}
