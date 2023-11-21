import { User } from '../../core/types';
import { Injectable } from '@angular/core';
import {SignUpRepository} from "../repositories";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SignUpService {
  users: User[] = [];

  constructor(private http: HttpClient, private signUpRepository: SignUpRepository){}

  getUsers() {
    return this.signUpRepository.getUsers().pipe(
      map((response: any) => {
        return response.map((user: any) => {
          return user;
        });
      })
    );
  }

  getUserByEmail(email: String) {
    return this.signUpRepository.getUserByEmail(email).pipe(
      map((response: any) => {
        return response.map((user: any) => {
          return user;
        });
      })
    );
  }

  createUser(user: User){
    return this.signUpRepository.postUser(user);
  }

  clearUsers() {
    this.users = [];
    return this.users;
  }
}
