import { Component, OnDestroy, OnInit } from '@angular/core';
import { AppData } from './app.data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  constructor(public appData: AppData) {
  }

  ngOnInit(): void {

  }

  ngOnDestroy(): void {
    
  }
}
