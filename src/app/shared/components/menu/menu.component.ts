import { Component, Input, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { NgIf } from "@angular/common";
import { ButtonComponent } from "../button/button.component";
import { User } from "../../../core/types";

@Component({
  standalone: true,
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  imports: [
    ButtonComponent,
    NgIf
  ],
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  @Input() isAdmin = false;
  protected showMenu = true;

  constructor(private router: Router){}

  toHome(): void {
    this.showMenu = false;
    this.router.navigate(['home']);
  }

  toCheck(): void {
    this.showMenu = false;
    this.router.navigate(['check']);
  }

  toProfile(): void {
    this.showMenu = false;
    this.router.navigate(['profile']);
  }

  toArchive(): void {
    this.showMenu = false;
    this.router.navigate(['archive']);
  }

  toSignUp(): void {
    this.showMenu = false;
    this.router.navigate(['sign-up']);
  }

  toLogIn(): void {
    this.showMenu = false;
    this.router.navigate(['login']);
  }

  toLogOut(): void {
    this.showMenu = false;
    localStorage.removeItem('currentUser');
  }
}
