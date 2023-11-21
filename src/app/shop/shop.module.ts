import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopScreenComponent } from './containers';
import {ButtonComponent} from "../shared/components/button/button.component";
import {MenuComponent} from "../shared/components/menu/menu.component";

@NgModule({
  declarations: [
    ShopScreenComponent
  ],
    imports: [
        CommonModule,
        ButtonComponent,
        MenuComponent
    ]
})
export class ShopModule { }
