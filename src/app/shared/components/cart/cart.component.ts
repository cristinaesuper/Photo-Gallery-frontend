import { Component } from '@angular/core';
import {ButtonComponent} from "../button/button.component";
import {MenuComponent} from "../menu/menu.component";
import {NgIf} from "@angular/common";

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
