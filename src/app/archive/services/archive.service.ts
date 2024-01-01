import { Injectable } from '@angular/core';
import { map } from "rxjs";
import { ArchiveRepository } from "../repositories";
import { Like } from "../../core/types";

@Injectable({
  providedIn: 'root'
})
export class ArchiveService {
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

  createLike(like: Like){
    return this.archiveRepository.postLike(like);
  }

  getLikedImagesByUser(userId: any) {
    return this.archiveRepository.getLikedImagesByUser(userId).pipe(
      map((response: any) => {
        return response.map((image: any) => {
          return image;
        });
      })
    );;
  }
}
