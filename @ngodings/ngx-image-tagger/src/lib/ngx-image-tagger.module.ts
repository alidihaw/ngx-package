import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgxCurrencyModule } from '@ngodings/ngx-currency-directive';
import { NgxImageTaggerComponent } from './ngx-image-tagger.component';

@NgModule({
  declarations: [
    NgxImageTaggerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgxCurrencyModule,
  ],
  providers: [],
  exports: [
    NgxImageTaggerComponent
  ]
})
export class NgxImageTaggerModule { }
