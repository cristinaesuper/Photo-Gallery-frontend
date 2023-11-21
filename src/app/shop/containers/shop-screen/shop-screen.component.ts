import { Component } from '@angular/core';

@Component({
  selector: 'app-shop-screen',
  templateUrl: './shop-screen.component.html',
  styleUrls: ['./shop-screen.component.css']
})
export class ShopScreenComponent {
  protected showMenu = false;

  openMenu(): void{
    this.showMenu = !this.showMenu;
  }
}
