import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CheckRepository {
  private backendApi = 'http://localhost:3000';

  constructor(private http: HttpClient){}

  getImages(){
    return this.http.get(`${this.backendApi}/images`);
  }

  deleteImage(imageId: any) {
    return this.http.delete(`${this.backendApi}/images/${imageId}`);
  }
}
