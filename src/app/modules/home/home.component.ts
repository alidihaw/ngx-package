import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ColorStandard } from '@models/color';
import { SizeStandard } from '@models/size';
import { AppHelper } from 'src/app/app.helper';

// tagger: TaggerModel = {
//     idParent: 'ngx-image-tagger-parent-1',
//     id: 'ngx-image-tagger-1',
//     url: 'https://picsum.photos/id/7/400/500',
//     urlShop: 'https://shopee.co.id/',
//     tags: []
//   }

//   price = 0;

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
            name: 'ngx-currency-directive',
            url: 'packages/ngx-currency-directive'
        },
        {
            name: 'ngx-image-tagger',
            url: 'packages/ngx-image-tagger'
        }
    ]
    constructor(public appHelper: AppHelper) {

    }

    async ngOnInit() {
    }
}
