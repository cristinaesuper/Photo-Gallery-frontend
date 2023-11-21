import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LoginRepository {
  private backendApi = 'http://localhost:3000';

  constructor(private http: HttpClient){}

  getUsers(){
    return this.http.get(`${this.backendApi}/users`);
  }

  getUserByEmail(email: String){
    return this.http.get(`${this.backendApi}/users/${email}`);
  }

  login(credentials: { email: string; password: string }) {
    return this.http.post<any>(`${this.backendApi}/users/login`, credentials);
  }
}
