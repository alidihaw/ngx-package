import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AppHelper } from 'src/app/app.helper';

import { AppData } from 'src/app/app.data';

@Component({
    selector: 'ngodings-ngx-device',
    templateUrl: './ngx-device.component.html',
    styleUrls: ['./ngx-device.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class PackageNgxDeviceComponent implements OnInit {
    sample1 = `<ngx-device [device]="'iphone-x'">Your Content</ngx-device>`;
    sample2 = `<ngx-device [device]="'note8'">Your Content</ngx-device>`;
    sample3 = `<ngx-device [device]="'iphone8'">Your Content</ngx-device>`;
    sample4 = `<ngx-device [device]="'iphone8plus'">Your Content</ngx-device>`;
    sample5 = `<ngx-device [device]="'iphone5s'">Your Content</ngx-device>`;
    sample6 = `<ngx-device [device]="'ipad'">Your Content</ngx-device>`;
    sample7 = `<ngx-device [device]="'nexus5'">Your Content</ngx-device>`;
    sample9 = `<ngx-device [device]="'macbook'">Your Content</ngx-device>`;

    constructor(public appHelper: AppHelper, public appData: AppData) {

    }

    async ngOnInit() {
    }
}
