import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SignUpRepository {
  private backendApi = 'http://localhost:3000';

  constructor(private http: HttpClient){}

  postUser(user: any) {
    return this.http.post(`${this.backendApi}/users`, user);
  }

}
