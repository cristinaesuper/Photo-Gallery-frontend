import { Component, Input } from '@angular/core';
import { Image } from "../../../core/types";

@Component({
  selector: 'app-liked-images',
  templateUrl: './liked-images.component.html',
  styleUrls: ['./liked-images.component.css']
})
export class LikedImagesComponent {
  @Input() images: string[] = [];
}
