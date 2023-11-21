import { User } from '../../core/types';
import { Injectable } from '@angular/core';
import {LoginRepository} from "../repositories";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  users: User[] = [];

  constructor(private http: HttpClient, private loginRepository: LoginRepository){}

  getUsers() {
    return this.loginRepository.getUsers().pipe(
      map((response: any) => {
        return response.map((user: any) => {
          return user;
        });
      })
    );
  }

  getUserByEmail(email: any) {
    return this.loginRepository.getUserByEmail(email).pipe(
      map((response: any) => {
          return response;
      })
    );
  }

  login(credentials: { email: string; password: string }) {
    return this.loginRepository.login(credentials);
  }
}
