import { Injectable } from '@angular/core';
import { map } from "rxjs";
import { Image } from '../../core/types';
import { ArchiveRepository } from "../repositories";

@Injectable({
  providedIn: 'root'
})
export class ArchiveService {
  images: Image[] = [];

  constructor(private archiveRepository: ArchiveRepository){}

  getImages() {
    return this.archiveRepository.getImages().pipe(
      map((response: any) => {
        return response.map((image: any) => {
          return image;
        });
      })
    );
  }

  getImagesByUserId(userId: any) {
    return this.archiveRepository.getImagesByUserId(userId).pipe(
      map((response: any) => {
        return response.map((image: any) => {
          return image;
        });
      })
    );
  }

  addImage(image: FormData){
    return this.archiveRepository.postImage(image);
  }

  clearImages() {
    this.images = [];
    return this.images;
  }
}
