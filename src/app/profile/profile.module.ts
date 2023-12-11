import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileScreenComponent } from './containers';
import {ButtonComponent} from "../shared/components/button/button.component";
import {MenuComponent} from "../shared/components/menu/menu.component";



@NgModule({
  declarations: [
    ProfileScreenComponent
  ],
    imports: [
        CommonModule,
        ButtonComponent,
        MenuComponent
    ]
})
export class ProfileModule { }
