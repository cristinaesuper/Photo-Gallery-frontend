import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import {HomeModule} from "./home/home.module";
import { ButtonComponent } from './shared/components/button/button.component';
import { AppRoutingModule } from './app-routing.module';
import { ProgressBarComponent } from './shared/components/progress-bar/progress-bar.component';
import {CommonModule} from "@angular/common";
import { FormDropdownComponent } from './shared/components/form-dropdown/form-dropdown.component';
import {SignUpModule} from "./sign-up/sign-up.module";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HomeModule,
    SignUpModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    BrowserAnimationsModule,
    ButtonComponent,
    ProgressBarComponent,
    FormDropdownComponent,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
