import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutScreenComponent } from './containers/about-screen/about-screen.component';
import {ButtonComponent} from "../shared/components/button/button.component";
import {MenuComponent} from "../shared/components/menu/menu.component";



@NgModule({
  declarations: [
    AboutScreenComponent
  ],
    imports: [
        CommonModule,
        ButtonComponent,
        MenuComponent
    ]
})
export class AboutModule { }
