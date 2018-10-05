import { PieceCreatorComponent } from './piece-creator/piece-creator.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProfileComponent} from './profile-component/profile-component.component';


const routes: Routes = [
    {
        path: '',
        component: ProfileComponent
    },
    {
        path: 'creation',
        component: PieceCreatorComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
