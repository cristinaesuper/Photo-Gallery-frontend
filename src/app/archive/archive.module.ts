import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { ArchiveScreenComponent } from './containers';
import {ButtonComponent} from "../shared/components/button/button.component";
import {ArchiveService} from "./services";
import {ArchiveRepository} from "./repositories";

@NgModule({
  declarations: [
    ArchiveScreenComponent
  ],
  imports: [
    CommonModule,
    ButtonComponent,
    NgOptimizedImage
  ],
  providers: [ArchiveService, ArchiveRepository]
})
export class ArchiveModule { }
