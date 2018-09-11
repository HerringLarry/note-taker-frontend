import { ArtPhotoUploaderComponent } from './art-photo-uploader/art-photo-uploader.component';
import { ProfilePhotoUploaderComponent } from './profile-photo-uploader/profile-photo-uploader.component';
import { ProfileFormComponent } from './profile-form/profile-form.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UploadsComponent } from './uploads.component';

const routes: Routes = [
    {
        path: '',
        component: UploadsComponent
    },
    {
        path: 'profileForm',
        component: ProfileFormComponent
    },
    {
        path: 'profilePhotoUpload',
        component: ProfilePhotoUploaderComponent
    },
    {
        path: 'artPhotoUpload',
        component: ArtPhotoUploaderComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UploadsRoutingModule { }
