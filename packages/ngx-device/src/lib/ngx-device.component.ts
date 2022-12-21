import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'ngx-device',
  templateUrl: './ngx-device.component.html',
  styleUrls: ['./ngx-device.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class NgxDeviceComponent implements OnInit {
  @Input() device: 'iphone-x' | 'note8' | 'iphone8' | 'iphone8plus' | 'iphone5s' | 'ipad' | 'nexus5' | 'macbook' = "iphone-x";

  constructor() {
  }

  ngOnInit() {
  }
}
