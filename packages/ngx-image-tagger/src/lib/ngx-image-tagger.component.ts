import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { fromEvent } from 'rxjs';

import { Tagged, TaggerModel } from './model/tag';

@Component({
  selector: 'ngx-image-tagger',
  templateUrl: './ngx-image-tagger.component.html',
  styleUrls: ['./ngx-image-tagger.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class NgxImageTaggerComponent implements OnInit {
  heightElement = 0;
  widthElement = 0;

  @Input() isAllowCreate = false;
  @Input() isShowThumbnail = true;
  @Input() imageClassList = "";


  @Input() placeholderName = 'Name';

  @Input() placeholderPrice = 'Price';
  @Input() isShowPrice = true;

  @Input() placeholderLink = 'Link';
  @Input() isShowLink = true;

  @Input() borderColor = "#007ac1";
  @Input() backgroundColor = "#03a9f4";
  @Input() textColor = "#ffffff";

  @Input() inputClassList = "";

  @Input() placeholderCreateTitle = 'Tag your product!';
  @Input() buttonCancelTitle = "Cancel";
  @Input() buttonCreateTitle = "Create";

  @Input() isShowShop = false;
  @Input() titleShop = "Go to shop";

  @Input() onShowTagMode: "Hover" | "Click" | "IconClick" = "IconClick";

  @Input() tagger: TaggerModel = {
    idParent: 'image-parent',
    id: 'image',
    style: '',
    urlShop: '',
    isOffsideX: false,
    isOffsideY: false,
    x: 0,
    y: 0,
    url: '',
    tags: []
  }
  @Output() taggerChange: EventEmitter<TaggerModel> = new EventEmitter<TaggerModel>();

  isShowForm = false;
  isShowView = true;
  form!: Tagged;

  constructor() {
    fromEvent(document.body, 'mousedown').subscribe((event: any) => {
      const elementId = (event.target as Element).id;
      if (this.tagger && elementId === this.tagger.id) {
        this.resetTag();

        const x = event.x;
        const y = event.y;

        this.heightElement = event?.srcElement?.offsetHeight;
        const halfY = this.heightElement / 2;
        if (halfY < y) {
          this.tagger.isOffsideY = true;
        } else {
          this.tagger.isOffsideY = false;
        }

        this.widthElement = event?.srcElement?.offsetWidth;
        const halfX = this.widthElement / 2;
        if (halfX < x) {
          this.tagger.isOffsideX = true;
        } else {
          this.tagger.isOffsideX = false;
        }
        this.tagger.x = (x * 100) / this.widthElement;
        this.tagger.y = (y * 100) / this.heightElement;
        this.isShowForm = true;
      }
    });
  }

  ngOnInit() {
    this.form = {
      id: '',
      x: 0,
      y: 0,
      isOffsideX: false,
      isOffsideY: false,
      tagger: this.tagger,
      open: false,
    }

    if (this.onShowTagMode === 'IconClick') {
      this.isShowView = false;
    }
  }

  changeStyleClick(id: string, tag: Tagged) {
    if (this.onShowTagMode != 'Click') {
      return;
    }

    tag.open = !tag.open;
    this.onShowStyle(id, tag.open);
  }

  changeStyleHover(id: string, show: boolean) {
    if (this.onShowTagMode == 'Click') {
      return;
    }
    this.onShowStyle(id, show);
  }

  onShowStyle(id: string, show: boolean) {
    const el = document.getElementById(id)
    if (el) {
      if (show) {
        el.style.display = "block"
      } else {
        el.style.display = "none"
      }
    }
  }

  goToURL(url: string) {
    window.open(url, "_blank");
  }

  goToTag(item: Tagged) {
    window.open(item.url, "_blank");
  }

  resetTag() {
    this.form.name = '';
    this.form.price = 0;
    this.form.url = '';
    this.isShowForm = false;
  }

  submitTag(item: TaggerModel) {
    if (item) {
      let isOffsideX = false;
      let isOffsideY = false;

      if (item?.x! > 50) {
        isOffsideX = true;
      } else {
        isOffsideX = false;
      }

      if (item?.y! > 0) {
        isOffsideY = true;
      } else {
        isOffsideY = false;
      }

      item.tags.push({
        id: "", name: this.form.name, url: this.form.url, x: item.x!, y: item.y!, isOffsideX, isOffsideY,
        open: false,
        price: this.form.price,
        tagger: Object.assign(this.tagger),
      });
      this.resetTag();
      this.taggerChange.next(this.tagger);
    }
  }

  editTag(item: TaggerModel, tag: Tagged, subindex: number) {
    this.form.name = tag?.name!;
    this.form.url = tag?.url!;

    this.tagger.x = tag.x;
    this.tagger.y = tag.y;
    this.tagger.isOffsideX = tag.isOffsideX
    this.tagger.isOffsideY = tag.isOffsideY;

    this.isShowForm = true;
    this.taggerChange.next(this.tagger);
  }

  deleteTag(item: TaggerModel, tag: Tagged, subindex: number) {
    this.tagger.tags.splice(subindex, 1);
    this.taggerChange.next(this.tagger);
  }
}
