import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../common/shared.module';
import { MatFormFieldModule, MatOptionModule, MatSelectModule, MatInputModule, MatButtonModule, MatStepperModule} from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { RegistrationRoutingModule } from './registration-routing.module';
import { RegistrationComponent } from './registration.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { ProfileFormComponent } from './profile-form/profile-form.component';
import { ProfilePhotoUploadComponent } from './profile-photo-upload/profile-photo-upload.component';

@NgModule({
  imports: [
    CommonModule, SharedModule, RegistrationRoutingModule, MatFormFieldModule, MatOptionModule, MatInputModule, MatSelectModule,
    MatButtonModule, ReactiveFormsModule, MatStepperModule,
  ],
  declarations: [
    RegistrationComponent,
    RegistrationFormComponent,
    ProfileFormComponent,
    ProfilePhotoUploadComponent,
  ],
  providers: [
  ],
  exports: [
  ],
})
export class RegistrationModule {}
