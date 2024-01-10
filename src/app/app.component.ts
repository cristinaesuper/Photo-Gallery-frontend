import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Title } from "@angular/platform-browser";
import { User } from "./core/types";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnChanges {
  title = 'Flower Gallery';
  protected showMenu = false;
  protected isAdmin: boolean | null | undefined = false;
  protected currentUser: User = { id: 0, name: '', email: '', password: '', admin: false };

  ngOnInit() {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
    this.isAdmin = this.currentUser.admin;
  }

  ngOnChanges(changes: SimpleChanges) {
    this.isAdmin = this.currentUser.admin;
  }

  constructor(private titleService:Title) {
    this.titleService.setTitle(this.title);
  }

  openMenu(): void{
    this.showMenu = !this.showMenu;
  }
}
