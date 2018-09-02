import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../common/shared.module';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';
import { LoginFormComponent } from './login-form/login-form.component';
import { MatFormFieldModule, MatOptionModule, MatSelectModule, MatInputModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule, SharedModule, LoginRoutingModule, MatFormFieldModule, MatOptionModule, MatInputModule, MatSelectModule,
  ],
  declarations: [
    LoginComponent, LoginFormComponent,
  ],
  providers: [
  ],
  exports: [
  ],
})
export class LoginModule {}
