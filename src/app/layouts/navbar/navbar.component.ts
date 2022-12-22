import { Component, HostListener, OnInit, ViewEncapsulation } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AppData } from 'src/app/app.data';
import { AppHelper } from 'src/app/app.helper';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class NavbarComponent implements OnInit {
  isScroll: boolean = false;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    let me = this;
    let element = document.querySelector('.navbar') as HTMLElement;
    if (window.pageYOffset > element.clientHeight) {
      if (this.isHome) {
        me.isScroll = true;
        element.classList.add('navbar-inverse');
      }
      element.classList.add('navbar-scroll');
    } else {
      if (this.isHome) {
        me.isScroll = false;
        element.classList.remove('navbar-inverse');
      }
      element.classList.remove('navbar-scroll');
    }
  }

  isHome = true;
  constructor(public appData: AppData, public router: Router, public appHelper: AppHelper) {
    router.events.subscribe((val: any) => {
      setTimeout(() => {
        if (val instanceof NavigationEnd) {
          this.onChangeLayout(val.url!);
        }
      }, 400);
    });
  }

  ngOnInit(): void {
    this.onChangeLayout(this.router.url);
  }

  onChangeLayout(url: string) {
    let element = document.querySelector('.navbar') as HTMLElement;
    if (element) {
      this.isHome = false;
      this.isScroll = true;
      element.classList.add('navbar-inverse');
    }
  }
}
