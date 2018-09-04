import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../common/shared.module';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';
import { LoginFormComponent } from './login-form/login-form.component';
import { MatFormFieldModule, MatOptionModule, MatSelectModule, MatInputModule, MatButtonModule } from '@angular/material';
import { LoginButtonComponent } from './login-button/login-button.component';
import { RegisterButtonComponent } from './register-button/register-button.component';

@NgModule({
  imports: [
    CommonModule, SharedModule, LoginRoutingModule, MatFormFieldModule, MatOptionModule, MatInputModule, MatSelectModule,
    MatButtonModule,
  ],
  declarations: [
    LoginComponent, LoginFormComponent, LoginButtonComponent, RegisterButtonComponent,
  ],
  providers: [
  ],
  exports: [
  ],
})
export class LoginModule {}
