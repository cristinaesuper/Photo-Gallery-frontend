import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopScreenComponent } from "./containers";

const routes: Routes = [
  { path: '',
    component: ShopScreenComponent
  },
  { path: 'shop',
    component: ShopScreenComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ShopRoutingModule { }
