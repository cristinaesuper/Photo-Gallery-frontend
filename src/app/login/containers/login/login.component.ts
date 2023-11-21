import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { FormBuilder, Validators } from "@angular/forms";
import { SignUpService } from "../../../sign-up/services";
import {Login, User} from "../../../core/types";
import { LoginService } from "../../services";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  protected users: User[] = [];
  protected showMenu = false;

  public loginForm = this.formBuilder.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  constructor(private router: Router,
              private signUpService: SignUpService,
              private loginService: LoginService,
              private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.signUpService.getUsers().subscribe(
      (users: User[]) => {
        this.users = users;
        console.log(this.users);
      }
    );
  }

  openMenu(): void{
    this.showMenu = !this.showMenu;
  }

  goToHomePage() {
    if (this.loginForm.valid) {
      const userData = this.loginForm.value;

      // this.loginService.getUserByEmail(userData.email).subscribe(
      //   (userExists: boolean) => {
      //     if (userExists) {
      //       console.log('User exists!');
      //       // Perform actions if the user exists
      //     } else {
      //       console.log('User does not exist!');
      //       // Perform actions if the user does not exist
      //     }
      //   },
      //   (error) => {
      //     console.error('Error checking user existence:', error);
      //     // Handle error
      //   }
      // );

      if (userData && typeof userData.email === 'string' && typeof userData.password === 'string'){

        const loginData: Login = {
          email: userData.email,
          password: userData.password,
        };

        this.loginService.login(loginData).subscribe(
          (user) => {
            if (user) {
              this.router.navigate(['archive']);
            }
          },
          (error) => {
            console.error('Login failed:', error);
          }
        );
      }
    }
  }

  goToSignUp() {
    this.router.navigate(['sign-up']);
  }
}
