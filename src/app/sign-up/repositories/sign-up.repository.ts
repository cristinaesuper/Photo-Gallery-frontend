import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../../core/types";

@Injectable({
  providedIn: 'root'
})
export class SignUpRepository {
  private backendApi = 'http://localhost:3000';

  constructor(private http: HttpClient){}

  getUsers(){
    return this.http.get(`${this.backendApi}/users`);
  }

  getUserByEmail(email: String){
    return this.http.get(`${this.backendApi}/users/${email}`);
  }

  postUser(user: User) {
    return this.http.post(`${this.backendApi}/users`, user);
  }

}
