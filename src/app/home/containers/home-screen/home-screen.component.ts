import { Component } from '@angular/core';
import {Collections} from "../../../core/constants/collections";

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.css']
})
export class HomeScreenComponent {
  protected readonly Collections = Collections;
}
