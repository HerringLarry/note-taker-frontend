import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile-component/profile-component.component';
import { ProfileRoutingModule } from './profile-routing.module';
import { SharedModule } from '../common/shared.module';
// tslint:disable-next-line:max-line-length
import { MatFormFieldModule, MatOptionModule, MatInputModule, MatSelectModule, MatButtonModule, MatProgressBarModule, MatProgressSpinnerModule, MatStepperModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFileUploadModule } from 'angular-material-fileupload';
import { ProfileHeaderComponent } from './profile-component/profile-header/profile-header.component';
import { ProfileInfoComponent } from './profile-component/profile-header/profile-info/profile-info.component';
import { ProfilePhotoComponent } from './profile-component/profile-header/profile-photo/profile-photo.component';
import { ProfileBodyComponent } from './profile-component/profile-body/profile-body.component';
import { PieceCreatorComponent } from './piece-creator/piece-creator.component';
import { PieceFormComponent } from './piece-creator/piece-form/piece-form.component';
import { PiecePhotoUploaderComponent } from './piece-creator/piece-photo-uploader/piece-photo-uploader.component';
@NgModule({
  imports: [
    CommonModule, SharedModule, ProfileRoutingModule,
    MatFormFieldModule, MatOptionModule, MatInputModule, MatSelectModule,
    MatButtonModule, ReactiveFormsModule, MatFileUploadModule, MatProgressSpinnerModule, MatFileUploadModule,
    MatStepperModule,
  ],
  declarations: [ProfileComponent, ProfilePhotoComponent,
    ProfileHeaderComponent, ProfileInfoComponent, ProfileBodyComponent,
    PieceCreatorComponent, PieceFormComponent, PiecePhotoUploaderComponent]
})
export class ProfileModule { }
