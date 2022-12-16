import { Component, OnInit, ViewEncapsulation } from '@angular/core';

// tagger: TaggerModel = {
//     idParent: 'ngx-image-tagger-parent-1',
//     id: 'ngx-image-tagger-1',
//     url: 'https://picsum.photos/id/7/400/500',
//     urlShop: 'https://shopee.co.id/',
//     tags: []
//   }

//   price = 0;

@Component({
    selector: 'maple-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class HomeComponent implements OnInit {
    constructor() {

    }

    async ngOnInit() {
    }
}
