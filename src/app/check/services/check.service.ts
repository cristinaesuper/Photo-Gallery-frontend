import { Injectable } from '@angular/core';
import { map } from "rxjs";
import { CheckRepository } from "../repositories";

@Injectable({
  providedIn: 'root'
})
export class CheckService {
  constructor(private checkRepository: CheckRepository){}

  getImages() {
    return this.checkRepository.getImages().pipe(
      map((response: any) => {
        return response.map((image: any) => {
          return image;
        });
      })
    );
  }

  deleteImage(imageId: any) {
    return this.checkRepository.deleteImage(imageId);
  }
}
