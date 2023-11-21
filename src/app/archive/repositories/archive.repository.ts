import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ArchiveRepository {
  private backendApi = 'http://localhost:3000';

  constructor(private http: HttpClient){}

  getImages(){
    return this.http.get(`${this.backendApi}/images`);
  }

  postImage(image: FormData) {
    return this.http.post(`${this.backendApi}/images`, image);
  }
}
