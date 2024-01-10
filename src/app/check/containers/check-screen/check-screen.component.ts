import { Component, OnInit } from '@angular/core';
import { MatDialog} from "@angular/material/dialog";
import { interval, startWith, switchMap } from "rxjs";
import { Image } from "../../../core/types";
import { CheckService } from "../../services";
import { DialogComponent } from "../../../shared/components/dialog/dialog.component";

@Component({
  selector: 'app-check-screen',
  templateUrl: './check-screen.component.html',
  styleUrls: ['./check-screen.component.css']
})
export class CheckScreenComponent implements OnInit {
  protected images: Image[] = [];
  protected loading = true;
  protected isImages = false;

  constructor (private checkService: CheckService,
               private dialog: MatDialog) {}

  ngOnInit() {
    interval(5000)
      .pipe(
        startWith(0),
        switchMap(() => this.checkService.getImages())
      )
      .subscribe(
        (images: any) => {
          this.images = images
            .map((image: any) => image)
            .filter((image: any) => this.getPassedTime(image));
          this.isImages = this.images.length !== 0;
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
      (images: any) => {
        this.openDialog("Image successfully deleted.")
      },
      (error: any) => {}
    );
  }

  openDialog(dialogText: string) {
    this.dialog.open(DialogComponent, {data: {dialogText}});
  }
}
