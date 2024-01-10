import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Image } from "../../../core/types";

@Component({
  selector: 'app-all-images',
  templateUrl: './all-images.component.html',
  styleUrls: ['./all-images.component.css']
})
export class AllImagesComponent {
  @Input() images: Image[] = [];
  @Input() isAuthenticated = false;
  @Output() press: EventEmitter<Image> = new EventEmitter;

  onPress(image: Image): void{
    this.press.emit(image);
  }
}
