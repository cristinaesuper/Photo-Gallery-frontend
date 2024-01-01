import { Component } from '@angular/core';
import { NgIf } from "@angular/common";
import { ButtonComponent } from "../button/button.component";
import { MenuComponent } from "../menu/menu.component";

@Component({
  standalone: true,
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  imports: [
    ButtonComponent,
    MenuComponent,
    NgIf
  ],
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

}
