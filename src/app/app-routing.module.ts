import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ShopScreenComponent} from "./shop/containers";
import {AboutScreenComponent} from "./about/containers";
import {ArchiveScreenComponent} from "./archive/containers";
import {HomeScreenComponent} from "./home/containers";
import {SignUpComponent} from "./sign-up/containers";
import {LoginComponent} from "./login/containers";

const routes: Routes = [
  { path: '',
    component: HomeScreenComponent
  },
  { path: 'home',
    component: HomeScreenComponent
  },
  { path: 'shop',
    component: ShopScreenComponent
  },
  { path: 'about',
    component: AboutScreenComponent
  },
  { path: 'archive',
    component: ArchiveScreenComponent
  },
  { path: 'sign-up',
    component: SignUpComponent
  },
  { path: 'login',
    component: LoginComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
