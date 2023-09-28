import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AboutScreenComponent} from "./containers";


const routes: Routes = [
  { path: '',
    component: AboutScreenComponent
  },
  { path: 'about',
    component: AboutScreenComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AboutRoutingModule { }
