import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CommonModule} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {HomeModule} from "./home/home.module";
import { ButtonComponent } from './shared/components/button/button.component';
import { ProgressBarComponent } from './shared/components/progress-bar/progress-bar.component';
import { FormDropdownComponent } from './shared/components/form-dropdown/form-dropdown.component';
import {SignUpModule} from "./sign-up/sign-up.module";
import {LoginModule} from "./login/login.module";
import {ArchiveModule} from "./archive/archive.module";
import {ShopModule} from "./shop/shop.module";
import {ProfileModule} from "./profile/profile.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ProfileModule,
    ArchiveModule,
    HomeModule,
    LoginModule,
    SignUpModule,
    ShopModule,
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
