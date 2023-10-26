import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { SignUpComponent } from './containers';
import {FormDropdownComponent} from "../shared/components/form-dropdown/form-dropdown.component";
import {SignUpRoutingModule} from "./sign-up-routing.module";
import {CountriesService} from "./services";
import {CountriesRepository} from "./repositories";
import {FormInputComponent} from "../shared/components/form-input/form-input.component";
import {ButtonComponent} from "../shared/components/button/button.component";

@NgModule({
  declarations: [
    SignUpComponent
  ],
  imports: [
    CommonModule,
    FormDropdownComponent,
    SignUpRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    FormInputComponent,
    ButtonComponent,
  ],
  providers: [CountriesService, CountriesRepository]
})
export class SignUpModule { }
