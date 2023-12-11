import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { FormBuilder, Validators } from "@angular/forms";
import {Login, User} from "../../../core/types";
import { LoginService } from "../../services";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  protected currentUser: User | null = {name: '', email: '', password: ''};
  protected showMenu = false;

  public loginForm = this.formBuilder.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  constructor(private router: Router,
              private loginService: LoginService,
              private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.loginService.getCurrentUser().subscribe(
      (user: User | null) => {
          this.currentUser = user
        }
    );
  }

  openMenu(): void{
    this.showMenu = !this.showMenu;
  }

  goToHomePage() {
    if (this.loginForm.valid) {
      const userData = this.loginForm.value;

      if (userData && typeof userData.email === 'string' && typeof userData.password === 'string'){

        const loginData: Login = {
          email: userData.email,
          password: userData.password,
        };

        this.loginService.login(loginData).subscribe(
          (user) => {
            if (user) {
              // this.loginService.setToken(response.token);

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
