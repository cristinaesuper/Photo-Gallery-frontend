import { Component } from '@angular/core';

@Component({
  selector: 'app-profile-screen',
  templateUrl: './profile-screen.component.html',
  styleUrls: ['./profile-screen.component.css']
})
export class ProfileScreenComponent {
  protected showMenu = false;

  openMenu(): void{
    this.showMenu = !this.showMenu;
  }
}
