import { Component, ViewEncapsulation } from '@angular/core';
import { ColorStandard } from '@models/color';
import { SizeStandard } from '@models/size';
import { AppData } from 'src/app/app.data';
import { AppHelper } from 'src/app/app.helper';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class FooterComponent {

  size = SizeStandard;
  color = ColorStandard;

  constructor(public appData: AppData, public appHelper: AppHelper) {

  }
}
