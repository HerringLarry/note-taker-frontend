import { DataRequestorService } from './common/services/data-requestor.service';
import { SharedModule } from './common/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginModule } from './login/login.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, SharedModule, LoginModule, AppRoutingModule,
    ReactiveFormsModule, FormsModule, HttpClientModule,
  ],
  providers: [ DataRequestorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
