import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileScreenComponent } from './containers';
import { ButtonComponent } from "../shared/components/button/button.component";
import { MenuComponent } from "../shared/components/menu/menu.component";
import { AllImagesComponent } from "./components";



@NgModule({
  declarations: [
    ProfileScreenComponent,
    AllImagesComponent
  ],
    imports: [
        CommonModule,
        ButtonComponent,
        MenuComponent
    ]
})
export class ProfileModule { }
