import {Component, OnInit} from '@angular/core';
import {CountriesService} from "../../services";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit{
  protected countries = [''];
  protected states = [''];
  protected cities = [''];
  protected selectedCountry = '';
  protected selectedState = '';
  protected selectedCity = '';
  constructor(private countriesApi: CountriesService) {}
  ngOnInit() {
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

  goToSuccess() {

  }
}
