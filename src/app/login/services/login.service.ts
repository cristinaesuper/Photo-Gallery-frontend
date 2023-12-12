import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, map, Observable } from "rxjs";
import { User } from '../../core/types';
import { LoginRepository } from "../repositories";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private userSubject = new BehaviorSubject<User | null>(null);
  private user$ : Observable<User | null> = this.userSubject.asObservable();

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
    return this.loginRepository.login(credentials)
      .pipe(map(user => {
        this.userSubject.next(user);
        localStorage.setItem('currentUser', JSON.stringify(user));
        return user;
      }));
  }

  getCurrentUser(): Observable<User | null> {
    return this.user$;
  }

  setToken(token: string) {
    this.loginRepository.setToken(token);
  }

  getToken() {
    return this.loginRepository.getToken();
  }
}
