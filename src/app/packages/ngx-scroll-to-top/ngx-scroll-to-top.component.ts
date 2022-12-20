import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AppHelper } from 'src/app/app.helper';

import { AppData } from 'src/app/app.data';

@Component({
    selector: 'ngodings-ngx-scroll-to-top',
    templateUrl: './ngx-scroll-to-top.component.html',
    styleUrls: ['./ngx-scroll-to-top.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class PackageNgxScrollToTopComponent implements OnInit {

    sample1 =
        `<ngx-scroll-to-top [bottomPosition]="'100px'" [rightPosition]="'20px'"></ngx-scroll-to-top>`;

    constructor(public appHelper: AppHelper, public appData: AppData) {

    }

    async ngOnInit() {
    }
}
