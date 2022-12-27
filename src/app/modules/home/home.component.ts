import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ColorStandard } from '@models/color';
import { SizeStandard } from '@models/size';
import { AppData } from 'src/app/app.data';
import { AppHelper } from 'src/app/app.helper';

@Component({
    selector: 'ngodings-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class HomeComponent implements OnInit {
    color = ColorStandard;
    size = SizeStandard;

    search = '';

    packages: { name: string, url: string, type: string }[] = [
        {
            name: 'ngx-timezone',
            url: 'packages/ngx-timezone',
            type: 'url',
        },
        {
            name: 'ngx-editor',
            url: 'packages/ngx-editor',
            type: 'url',
        },
        {
            name: 'ngx-whatsapp',
            url: 'packages/ngx-whatsapp',
            type: 'url',
        },
        {
            name: 'ngx-copy',
            url: 'packages/ngx-copy',
            type: 'url',
        },
        {
            name: 'ngx-device',
            url: 'packages/ngx-device',
            type: 'url',
        },
        {
            name: 'ngx-scroll-to-top',
            url: 'packages/ngx-scroll-to-top',
            type: 'url',
        },
        {
            name: 'ngx-image-tagger',
            url: 'packages/ngx-image-tagger',
            type: 'url',
        },
        {
            name: 'ngx-currency',
            url: 'packages/ngx-currency',
            type: 'url',
        },
        {
            name: 'ngx-rupiah',
            url: 'packages/ngx-rupiah',
            type: 'url',
        },
        {
            name: 'ngx-country',
            url: 'packages/ngx-country',
            type: 'url',
        },
        {
            name: 'ngx-ip',
            url: 'packages/ngx-ip',
            type: 'url',
        },
        {
            name: 'ngx-interceptor',
            url: 'https://www.npmjs.com/package/@ngodings/ngx-interceptor',
            type: 'link',
        },
        {
            name: 'ngx-pipes',
            url: 'packages/ngx-pipes',
            type: 'url',
        },
    ]
    constructor(public appHelper: AppHelper, public appData: AppData,) {

    }

    async ngOnInit() {
    }
}
