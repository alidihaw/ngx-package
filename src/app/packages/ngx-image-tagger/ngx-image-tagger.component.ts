import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AppHelper } from 'src/app/app.helper';

import { TaggerModel } from 'packages/ngx-image-tagger/src/public-api';
import { AppData } from 'src/app/app.data';

@Component({
    selector: 'ngodings-ngx-image-tagger',
    templateUrl: './ngx-image-tagger.component.html',
    styleUrls: ['./ngx-image-tagger.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class PackageNgxImageTaggerDirectiveComponent implements OnInit {
    tagger = {
        idParent: 'parent-image-tagger-1',
        id: 'image-tagger-1',
        url: 'https://i.picsum.photos/id/26/4209/2769.jpg?hmac=vcInmowFvPCyKGtV7Vfh7zWcA_Z0kStrPDW3ppP0iGI',
        urlShop: 'https://shopee.co.id',
        tags: [],
    }
    taggerCreate = {
        idParent: 'parent-image-tagger-2',
        id: 'image-tagger-2',
        url: 'https://i.picsum.photos/id/48/5000/3333.jpg?hmac=y3_1VDNbhii0vM_FN6wxMlvK27vFefflbUSH06z98so',
        urlShop: 'https://shopee.co.id',
        tags: [],
    }
    taggerClick = {
        idParent: 'parent-image-tagger-3',
        id: 'image-tagger-3',
        url: 'https://i.picsum.photos/id/26/4209/2769.jpg?hmac=vcInmowFvPCyKGtV7Vfh7zWcA_Z0kStrPDW3ppP0iGI',
        urlShop: 'https://shopee.co.id',
        tags: [],
    }
    taggerHover = {
        idParent: 'parent-image-tagger-4',
        id: 'image-tagger-4',
        url: 'https://i.picsum.photos/id/26/4209/2769.jpg?hmac=vcInmowFvPCyKGtV7Vfh7zWcA_Z0kStrPDW3ppP0iGI',
        urlShop: 'https://shopee.co.id',
        tags: [],
    }
    data: { tagger: TaggerModel, taggerHover: TaggerModel, taggerCreate: TaggerModel, taggerClick: TaggerModel } = {
        tagger: {
            ...this.tagger,
            tags: [
                {
                    id: '1',
                    y: 27.4436,
                    x: 13.0864,
                    name: 'Wallet',
                    price: 20,
                    url: 'https://shopee.co.id',
                    open: false,
                    isOffsideX: false,
                    isOffsideY: false,
                    tagger: this.tagger,
                },
                {
                    id: '2',
                    y: 37.594,
                    x: 31.6049,
                    name: 'Glasses',
                    price: 10,
                    url: 'https://shopee.co.id',
                    open: false,
                    isOffsideX: false,
                    isOffsideY: false,
                    tagger: this.tagger,
                },
                {
                    id: '3',
                    y: 70.6767,
                    x:  44.6914,
                    name: 'Stopwatch',
                    price: 125,
                    url: 'https://shopee.co.id',
                    open: false,
                    isOffsideX: false,
                    isOffsideY: false,
                    tagger: this.tagger,
                },
                {
                    id: '4',
                    y: 23.3083,
                    x:  75.5556,
                    name: 'Book',
                    price: 4,
                    url: 'https://shopee.co.id',
                    open: false,
                    isOffsideX: false,
                    isOffsideY: false,
                    tagger: this.tagger,
                },
                {
                    id: '5',
                    y: 23.3083,
                    x:  49.8765,
                    name: 'Tie',
                    price: 12,
                    url: 'https://shopee.co.id',
                    open: false,
                    isOffsideX: false,
                    isOffsideY: false,
                    tagger: this.tagger,
                },
            ]
        },
        taggerCreate: {
            ...this.taggerCreate,
        },
        taggerHover: {
            ...this.taggerHover,
            tags: [
                {
                    id: 'hover-1',
                    y: 27.4436,
                    x: 13.0864,
                    name: 'Wallet',
                    price: 20,
                    url: 'https://shopee.co.id',
                    open: false,
                    isOffsideX: false,
                    isOffsideY: false,
                    tagger: this.tagger,
                },
                {
                    id: 'hover-2',
                    y: 37.594,
                    x: 31.6049,
                    name: 'Glasses',
                    price: 10,
                    url: 'https://shopee.co.id',
                    open: false,
                    isOffsideX: false,
                    isOffsideY: false,
                    tagger: this.tagger,
                },
                {
                    id: 'hover-3',
                    y: 70.6767,
                    x:  44.6914,
                    name: 'Stopwatch',
                    price: 125,
                    url: 'https://shopee.co.id',
                    open: false,
                    isOffsideX: false,
                    isOffsideY: false,
                    tagger: this.tagger,
                },
                {
                    id: 'hover-4',
                    y: 23.3083,
                    x:  75.5556,
                    name: 'Book',
                    price: 4,
                    url: 'https://shopee.co.id',
                    open: false,
                    isOffsideX: false,
                    isOffsideY: false,
                    tagger: this.tagger,
                },
                {
                    id: 'hover-5',
                    y: 23.3083,
                    x:  49.8765,
                    name: 'Tie',
                    price: 12,
                    url: 'https://shopee.co.id',
                    open: false,
                    isOffsideX: false,
                    isOffsideY: false,
                    tagger: this.tagger,
                },
            ]
        },
        taggerClick: {
            ...this.taggerClick,
            tags: [
                {
                    id: 'click-1',
                    y: 27.4436,
                    x: 13.0864,
                    name: 'Wallet',
                    price: 20,
                    url: 'https://shopee.co.id',
                    open: false,
                    isOffsideX: false,
                    isOffsideY: false,
                    tagger: this.tagger,
                },
                {
                    id: 'click-2',
                    y: 37.594,
                    x: 31.6049,
                    name: 'Glasses',
                    price: 10,
                    url: 'https://shopee.co.id',
                    open: false,
                    isOffsideX: false,
                    isOffsideY: false,
                    tagger: this.tagger,
                },
            ]
        }
    };

sample1 = 
`<ngx-image-tagger 
    [tagger]="data.taggerHover" 
    [isShowShop]="true" 
    [isShowPrice]="true" 
    [isShowLink]="true" 
    [isShowThumbnail]="true" 
    [isAllowCreate]="false" 
    [placeholderCreateTitle]="'Tag your product!'"
    [placeholderLink]="'Link'"
    [placeholderPrice]="'Price'"
    [onShowTagMode]="'Hover'"
    [imageClassList]="''"
    [inputClassList]="''"
    [backgroundColor]="'#03a9f4'"
    [borderColor]="'#007ac1'"
    [textColor]="'#ffffff'"
    (taggerChange)="data.taggerHover = $event">
</ngx-image-tagger>`;
sample2 = 
`<ngx-image-tagger 
    [tagger]="data.tagger" 
    [isShowShop]="true" 
    [isShowPrice]="true" 
    [isShowLink]="true" 
    [isShowThumbnail]="true" 
    [isAllowCreate]="false" 
    [placeholderCreateTitle]="'Tag your product!'"
    [placeholderLink]="'Link'"
    [placeholderPrice]="'Price'"
    [onShowTagMode]="'IconClick'"
    [imageClassList]="''"
    [inputClassList]="''"
    [backgroundColor]="'#03a9f4'"
    [borderColor]="'#007ac1'"
    [textColor]="'#ffffff'"
    (taggerChange)="data.tagger = $event">
</ngx-image-tagger>`;
sample3 = 
`<ngx-image-tagger 
    [tagger]="data.taggerCreate" 
    [isShowShop]="false" 
    [isShowPrice]="true" 
    [isShowLink]="true" 
    [isShowThumbnail]="true" 
    [isAllowCreate]="true" 
    [placeholderCreateTitle]="'Tag your product!'"
    [placeholderLink]="'Link'"
    [placeholderPrice]="'Price'"
    [onShowTagMode]="'IconClick'"
    [imageClassList]="''"
    [inputClassList]="''"
    [backgroundColor]="'#03a9f4'"
    [borderColor]="'#007ac1'"
    [textColor]="'#ffffff'"
    (taggerChange)="data.taggerCreate = $event">
</ngx-image-tagger>`;
sample4 = 
`<ngx-image-tagger 
    [tagger]="data.taggerClick" 
    [isShowShop]="true" 
    [isShowPrice]="true" 
    [isShowLink]="true" 
    [isShowThumbnail]="true" 
    [isAllowCreate]="false" 
    [placeholderCreateTitle]="'Tag your product!'"
    [placeholderLink]="'Link'"
    [placeholderPrice]="'Price'"
    [onShowTagMode]="'Click'"
    [imageClassList]="''"
    [inputClassList]="''"
    [backgroundColor]="'#03a9f4'"
    [borderColor]="'#007ac1'"
    [textColor]="'#ffffff'"
    (taggerChange)="data.taggerClick = $event">
</ngx-image-tagger>`;

    constructor(public appHelper: AppHelper, public appData: AppData) {


    }

    async ngOnInit() {
    }
}
