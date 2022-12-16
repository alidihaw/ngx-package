import { Component } from '@angular/core';
import { TaggerModel } from 'packages/ngx-image-tagger/src/lib/model/tag';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  tagger: TaggerModel = {
    idParent: 'ngx-image-tagger-parent-1',
    id: 'ngx-image-tagger-1',
    url: 'https://picsum.photos/id/7/400/500',
    urlShop: 'https://shopee.co.id/',
    tags: []
  }

  price = 0;
}
