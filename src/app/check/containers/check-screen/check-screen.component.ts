import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Image } from "../../../core/types";
import { CheckService } from "../../services";

@Component({
  selector: 'app-check-screen',
  templateUrl: './check-screen.component.html',
  styleUrls: ['./check-screen.component.css']
})
export class CheckScreenComponent implements OnInit {
  protected images: Image[] = [];
  protected loading = true;

  constructor (private checkService: CheckService,
               private datePipe: DatePipe) {}

  ngOnInit() {
    this.checkService.getImages().subscribe(
      (images: any) => {
        this.images = images
          .map((image: any) => ({ ...image, liked: false }))
          .filter((image: any) => this.getPassedTime(image));
      },
      (error: any) => {
        console.error('Error adding images:', error);
      }
    );

    this.loading = false;
  }

  getPassedTime(image: Image) {
    const currentDateAndTime = new Date();
    const creationDateAndTime = new Date(image.date);
    const timePassed = currentDateAndTime.getTime() - creationDateAndTime.getTime();
    const hoursPassed = timePassed / (1000 * 60 * 60);

    return hoursPassed < 2;
  }

  deleteImage(image: Image) {
    this.checkService.deleteImage(image.id).subscribe(
      (images: any) => {},
      (error: any) => {}
    );
  }
}
