import { Component } from '@angular/core';
import { AppData } from './app.data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public appData: AppData,) {

  }
}
