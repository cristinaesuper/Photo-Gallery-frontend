import {Component, Input} from '@angular/core';
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";

@Component({
  standalone: true,
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  imports: [
    MatInputModule,
    ReactiveFormsModule
  ],
  styleUrls: ['./form-input.component.css']
})
export class FormInputComponent {
  @Input() placeholder = '';
  @Input() inputTitle = '';
  @Input() required = false;
  @Input() fieldTextType = true;
}
