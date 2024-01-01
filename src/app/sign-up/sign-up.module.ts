import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { SignUpComponent } from './containers';
import { FormDropdownComponent } from "../shared/components/form-dropdown/form-dropdown.component";
import { SignUpRoutingModule } from "./sign-up-routing.module";
import { CountriesService } from "./services";
import { CountriesRepository } from "./repositories";
import { FormInputComponent } from "../shared/components/form-input/form-input.component";
import { ButtonComponent } from "../shared/components/button/button.component";
import { HeaderComponent } from "../shared/components/header/header.component";
import { MenuComponent } from "../shared/components/menu/menu.component";
import {DialogComponent} from "../shared/components/dialog/dialog.component";
import {MatButtonModule} from "@angular/material/button";

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
    MatInputModule,
    HeaderComponent,
    MenuComponent,
    DialogComponent,
    MatButtonModule,
  ],
  providers: [CountriesService, CountriesRepository]
})
export class SignUpModule { }
