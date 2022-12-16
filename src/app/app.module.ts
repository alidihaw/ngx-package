import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgxCurrencyModule } from 'packages/ngx-currency-directive/src/public-api';
import { NgxImageTaggerModule } from 'packages/ngx-image-tagger/src/public-api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    NgxImageTaggerModule,

    FormsModule,
    NgxCurrencyModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
