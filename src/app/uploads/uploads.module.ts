import { MatStepperModule, MatFormFieldModule, MatOptionModule, MatInputModule, MatSelectModule, MatButtonModule } from '@angular/material';
import { ArtPhotoUploaderComponent } from './art-photo-uploader/art-photo-uploader.component';
import { ProfileFormComponent } from './profile-form/profile-form.component';
import { ProfilePhotoUploaderComponent } from './profile-photo-uploader/profile-photo-uploader.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadsComponent } from './uploads.component';
import { SharedModule } from '../common/shared.module';
import { MatFileUploadModule } from 'angular-material-fileupload';
import { UploadsRoutingModule } from './uploads-routing.module';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule, SharedModule, UploadsRoutingModule, MatFormFieldModule, MatOptionModule, MatInputModule, MatSelectModule,
    MatButtonModule, MatFileUploadModule, MatStepperModule, ReactiveFormsModule, FormsModule,
  ],
  declarations: [UploadsComponent, ProfilePhotoUploaderComponent, ProfileFormComponent, ArtPhotoUploaderComponent,
  ]
})
export class UploadsModule { }
