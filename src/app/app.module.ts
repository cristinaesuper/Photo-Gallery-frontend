import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import {HomeModule} from "./home/home.module";
import { ButtonComponent } from './shared/components/button/button.component';
import { AppRoutingModule } from './app-routing.module';
import { ProgressBarComponent } from './shared/components/progress-bar/progress-bar.component';
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HomeModule,
    CommonModule,
    BrowserAnimationsModule,
    ButtonComponent,
    ProgressBarComponent,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
