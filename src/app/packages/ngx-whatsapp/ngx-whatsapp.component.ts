import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AppHelper } from 'src/app/app.helper';

import { AppData } from 'src/app/app.data';

@Component({
    selector: 'ngodings-ngx-whatsapp',
    templateUrl: './ngx-whatsapp.component.html',
    styleUrls: ['./ngx-whatsapp.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class PackageNgxWhatsappComponent implements OnInit {

    sample1 =
        `<ngx-whatsapp [phoneNumber]="'+6285280871948'" [message]="'Hi, i need help about ... '" [bottomPosition]="'100px'" [rightPosition]="'20px'"></ngx-whatsapp>`;

    constructor(public appHelper: AppHelper, public appData: AppData) {

    }

    async ngOnInit() {
    }
}
