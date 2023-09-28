import {Component, OnInit} from '@angular/core';
import {ButtonComponent} from "../button/button.component";
import {MatMenuModule} from "@angular/material/menu";
import {MenuComponent} from "../menu/menu.component";
import {NgIf} from "@angular/common";
import {CartComponent} from "../cart/cart.component";

@Component({
  standalone: true,
  selector: 'app-header',
  templateUrl: './header.component.html',
  imports: [
    ButtonComponent,
    MatMenuModule,
    MenuComponent,
    NgIf,
    CartComponent
  ],
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  protected showMenu = false;
  protected showCart = false;

  openMenu(): void{
    this.showMenu = !this.showMenu;
  }

  openCart(): void{
    this.showCart = !this.showCart;
  }
}
