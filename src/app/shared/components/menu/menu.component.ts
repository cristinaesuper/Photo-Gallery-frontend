import {Component} from '@angular/core';
import {ButtonComponent} from "../button/button.component";
import {Router} from "@angular/router";

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

  constructor(private router: Router){}

  toShop(): void {
    this.router.navigate(['shop']);
  }

  toAbout(): void {
    this.router.navigate(['about']);
  }

  toArchive(): void {
    this.router.navigate(['archive']);
  }
}
