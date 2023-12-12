import { Injectable } from '@angular/core';
import { map } from "rxjs";
import { ProfileRepository } from "../repositories";

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  constructor(private profileRepository: ProfileRepository){}

  getImagesByUserId(userId: any) {
    return this.profileRepository.getImagesByUserId(userId).pipe(
      map((response: any) => {
        return response.map((image: any) => {
          return image;
        });
      })
    );
  }

  addImage(image: FormData){
    return this.profileRepository.postImage(image);
  }
}
