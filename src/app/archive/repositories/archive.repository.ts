import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Like } from "../../core/types";

@Injectable({
  providedIn: 'root'
})
export class ArchiveRepository {
  private backendApi = 'http://localhost:3000';

  constructor(private http: HttpClient){}

  getImages(){
    return this.http.get(`${this.backendApi}/images`);
  }

  postLike(like: Like) {
    return this.http.post(`${this.backendApi}/likes`, like);
  }

  getLikedImagesByUser(userId: any){
    return this.http.get(`${this.backendApi}/likes/user/${userId}`);
  }
}
