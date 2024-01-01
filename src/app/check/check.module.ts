import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { CheckScreenComponent } from './containers';
import { ButtonComponent } from "../shared/components/button/button.component";
import { MenuComponent } from "../shared/components/menu/menu.component";
import { NewImagesComponent } from "./components";
import { CheckService } from "./services";
import { CheckRepository } from "./repositories";
import {MatIconModule} from "@angular/material/icon";

@NgModule({
  declarations: [
    CheckScreenComponent,
    NewImagesComponent
  ],
  imports: [
    CommonModule,
    ButtonComponent,
    MenuComponent,
    MatIconModule
  ],
  providers: [DatePipe, CheckService, CheckRepository]
})
export class CheckModule { }
