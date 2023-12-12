import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {CountriesService} from "../../services";
import {SignUpService} from "../../services";
import {User} from "../../../core/types"

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit{
  protected countries = [''];
  protected users: User[] = [];
  protected states = [''];
  protected cities = [''];
  protected selectedCountry = '';
  protected selectedState = '';
  protected selectedCity = '';
  protected showMenu = false;

  public userForm = this.formBuilder.group({
    name: ['', Validators.required],
    password: ['', Validators.required],
    email: ['', Validators.required],
  });

  // public addressForm = this.formBuilder.group({
  //   country: [''],
  //   state: [''],
  //   city: [''],
  // });

  constructor(private router: Router,
              private countriesApi: CountriesService,
              private signUpService: SignUpService,
              private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.signUpService.getUsers().subscribe(
      (users: User[]) => {
        this.users = users;
        console.log(this.users);
      }
    );

    this.countriesApi.getCountries().subscribe((countries: string[]) => this.countries = countries);
  }

  getSelectedCountry(selectedCountry: string){
    this.selectedCountry = selectedCountry;
    this.countriesApi.getStatesByCountry(this.selectedCountry).subscribe((states: string[]) => this.states = states);
    this.countriesApi.getCitiesByCountry(this.selectedCountry).subscribe((cities: string[]) => this.cities = cities);

  }
  getSelectedState(selectedState: string){
    this.selectedState = selectedState;
  }
  getSelectedCity(selectedCity: string) {
    this.selectedCity = selectedCity;
  }

  openMenu(): void{
    this.showMenu = !this.showMenu;
  }

  goToSuccess() {
    if (this.userForm.valid) {
      const userData = this.userForm.value;
      const newUser = {name: userData.name, email: userData.email, password: userData.password};

      this.signUpService.createUser(newUser).subscribe(
        (response: any) => {},
        (error: any) => { console.error('Error creating user:', error); }

      );

      this.router.navigate(['archive']);
    } else {
      console.log('Form is invalid');
    }
  }

  goToLogin() {
    this.router.navigate(['login']);
  }

  get name() {
    return this.userForm.get('name')?.value;
  }

  get nameControl() {
    return this.userForm.get('name');
  }

  get email() {
    return this.userForm.get('email')?.value;
  }

  get password() {
    return this.userForm.get('password')?.value;
  }

  // get country() {
  //   return this.userForm.get('country')?.value;
  // }
  //
  // get state() {
  //   return this.userForm.get('state')?.value;
  // }
  //
  // get city() {
  //   return this.userForm.get('city')?.value;
  // }
}
