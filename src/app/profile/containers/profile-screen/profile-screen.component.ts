import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { User } from "../../../core/types";
import { ProfileService } from "../../services";

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
  protected previewFiles: string[] = [];

  constructor(private router: Router,
              private profileService: ProfileService) {}

  ngOnInit() {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');

    if (this.currentUser) {
      this.profileService.getImagesByUserId(this.currentUser.id).subscribe(
        (images: any) => {
          this.imageUrls = images;
        },
        (error: any) => {
          console.error('Error adding images:', error);
        }
      );
    }

    this.loading = false;
  }

  onFileSelected($event: Event){
    const inputElement = $event.target as HTMLInputElement;

    if (inputElement.files)  {
      const files: FileList = inputElement.files;

      for (let i = 0; i < files.length; i++) {
        const reader = new FileReader();
        reader.onload = (e) => {
          if (e.target && typeof e.target.result === 'string') {
            const previewFile = e.target.result;
            this.previewFiles.push(previewFile);
            this.fileList.push(files[i]);
          }
        };
        reader.readAsDataURL(files[i]);
      }
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

    this.profileService.addImage(formData).subscribe();
  }
}
