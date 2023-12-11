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

  toHome(): void {
    this.router.navigate(['home']);
  }

  toShop(): void {
    this.router.navigate(['shop']);
  }

  toProfile(): void {
    this.router.navigate(['profile']);
  }

  toArchive(): void {
    this.router.navigate(['archive']);
  }

  toSignUp(): void {
    this.router.navigate(['sign-up']);
  }

  toLogIn(): void {
    this.router.navigate(['login']);
  }
}
