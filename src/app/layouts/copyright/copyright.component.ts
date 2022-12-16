import { Component, ViewEncapsulation } from '@angular/core';
import { AppData } from 'src/app/app.data';
import { AppHelper } from 'src/app/app.helper';

@Component({
  selector: 'app-copyright',
  templateUrl: './copyright.component.html',
  styleUrls: ['./copyright.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CopyrightComponent {
  constructor(public appData: AppData, public appHelper: AppHelper) {

  }
}
