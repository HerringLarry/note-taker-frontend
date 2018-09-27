import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile-component/profile-component.component';
import { ProfileRoutingModule } from './profile-routing.module';
import { SharedModule } from '../common/shared.module';
import { MatFormFieldModule, MatOptionModule, MatInputModule, MatSelectModule, MatButtonModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFileUploadModule } from 'angular-material-fileupload';


@NgModule({
  imports: [
    CommonModule, SharedModule, ProfileRoutingModule,
    MatFormFieldModule, MatOptionModule, MatInputModule, MatSelectModule,
    MatButtonModule, ReactiveFormsModule, MatFileUploadModule
  ],
  declarations: [ProfileComponent]
})
export class ProfileModule { }
