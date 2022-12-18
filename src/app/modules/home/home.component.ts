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
   
    packages: {name: string, url: string}[] = [
        {
            name: 'ngx-image-tagger',
            url: 'packages/ngx-image-tagger'
        },
        {
            name: 'ngx-copy',
            url: 'packages/ngx-copy'
        },
        {
            name: 'ngx-currency',
            url: 'packages/ngx-currency'
        },
    ]
    constructor(public appHelper: AppHelper, public appData: AppData,) {

    }

    async ngOnInit() {
    }
}
