import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Plus';
  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
}
