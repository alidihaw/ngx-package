import { Component, EventEmitter, HostListener, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'ngx-scroll-to-top',
  templateUrl: './ngx-scroll-to-top.component.html',
  styleUrls: ['./ngx-scroll-to-top.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class NgxScrollToTopComponent implements OnInit {
  @Input() rightPosition = '20px';
  @Input() bottomPosition = '100px';

  isShow: boolean = false;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    let me = this;
    if (window.pageYOffset > 100) {
      me.isShow = true;
    } else {
      me.isShow = false;
    }
  }
  constructor() {

  }

  ngOnInit(): void {
  }

  scrollToTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

}
