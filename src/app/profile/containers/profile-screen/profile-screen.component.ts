import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { MatDialog } from "@angular/material/dialog";
import { interval, startWith, switchMap } from "rxjs";
import { User } from "../../../core/types";
import { ProfileService } from "../../services";
import { DialogComponent } from "../../../shared/components/dialog/dialog.component";

@Component({
  selector: 'app-profile-screen',
  templateUrl: './profile-screen.component.html',
  styleUrls: ['./profile-screen.component.css']
})
export class ProfileScreenComponent implements OnInit {
  protected imageUrls: string[] = [];
  protected currentUser: User = { id: 0, name: '', email: '', password: '', admin: false };
  protected loading = true;
  protected showUpload = false;
  protected fileList: File[] = [];
  protected previewFile = '';

  constructor(private router: Router,
              private profileService: ProfileService,
              private dialog: MatDialog) {}

  ngOnInit() {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');

    if (this.currentUser) {
      interval(5000)
        .pipe(
          startWith(0),
          switchMap(() => this.profileService.getImagesByUserId(this.currentUser.id)
        ))
        .subscribe(
          (images: any) => {
            this.imageUrls = images;
          },
          (error: any) => {
            console.error('Error getting images:', error);
          }
        );
    }

    this.loading = false;
  }

  onFileSelected($event: Event){
    const inputElement = $event.target as HTMLInputElement;

    if (inputElement.files)  {
      const file: File = inputElement.files[0];
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target && typeof e.target.result === 'string') {
          this.previewFile = e.target.result;
          this.fileList = [file];
        }
      };
      reader.readAsDataURL(file);
    }

    this.showUpload = true;
  }

  uploadFiles() {
    const formData = new FormData();
    const currentDate = new Date().toString();
    const userId = this.currentUser.id!.toString();

    this.fileList.forEach((uploadedFile: File) => {
      formData.append('image', uploadedFile);
      formData.append('description', '');
      formData.append('date', currentDate);
      formData.append('userId', userId);
    });

    this.profileService.addImage(formData).subscribe(
      (images: any) => {
        this.openDialog("Image successfully uploaded.");
        this.fileList = [];
        this.showUpload = false;
      },
      (error: any) => {
        console.error('Error adding images:', error);
      }
    );
  }

  openDialog(dialogText: string) {
    this.dialog.open(DialogComponent, {data: {dialogText}});
  }
}
