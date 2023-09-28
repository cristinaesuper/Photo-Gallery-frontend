import {Component, EventEmitter, Input, Output} from '@angular/core';
import {MatButtonModule} from "@angular/material/button";

@Component({
  standalone: true,
  selector: 'app-button',
  templateUrl: './button.component.html',
  imports: [
    MatButtonModule
  ],
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input() label = '';
  @Output() press = new EventEmitter;

  onClick(): void{
    this.press.emit();
  }
}
