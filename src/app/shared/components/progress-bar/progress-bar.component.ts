import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Observable } from "rxjs";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {CommonModule} from "@angular/common";

@Component({
  standalone: true,
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  imports: [
    MatProgressBarModule,
    CommonModule
  ],
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit{
  @Output() progressValue = new EventEmitter();
  progressValue$: Observable<any> | undefined;

  constructor() {}

  ngOnInit() {

  }

}
