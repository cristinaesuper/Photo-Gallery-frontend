import {Component, OnInit} from '@angular/core';
import { Router } from "@angular/router";
import { ArchiveService } from "../../services";

@Component({
  selector: 'app-archive-screen',
  templateUrl: './archive-screen.component.html',
  styleUrls: ['./archive-screen.component.css']
})
export class ArchiveScreenComponent implements OnInit{
  public safeImages: string[] = [];

  protected loading = true;
  protected fileList: File[] = [];
  protected previewFiles: string[] = [];

  constructor(private router: Router,
              private archiveService: ArchiveService) {}

  ngOnInit() {
    this.archiveService.getImages().subscribe(
      (images: any) => {
        this.safeImages = images;
      },
      (error: any) => {
        console.error('Error adding images:', error);
      }
    );

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
            console.log(previewFile);
            this.previewFiles.push(previewFile);
            this.fileList.push(files[i]);
          }
        };
        reader.readAsDataURL(files[i]);
      }
    }
  }

  uploadFiles() {
    const formData = new FormData();

    this.fileList.forEach((uploadedFile: File) => {
      formData.append('image', uploadedFile);
    });

    this.archiveService.addImage(formData).subscribe(
      (response: any) => {},
      (error: any) => {
        console.error('Error adding images:', error);
      }
    );
  }
}
