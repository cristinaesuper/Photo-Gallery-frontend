import {Component} from '@angular/core';
import {ButtonComponent} from "../button/button.component";

@Component({
  standalone: true,
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  imports: [
    ButtonComponent
  ],
  styleUrls: ['./menu.component.css']
})
export class MenuComponent{
}
