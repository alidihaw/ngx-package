import { CommonModule, CurrencyPipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgxCurrencyModule } from '@ngodings/ngx-currency-directive';
import { NgxImageTaggerComponent } from './ngx-image-tagger.component';

@NgModule({
  declarations: [
    NgxImageTaggerComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgxCurrencyModule,
  ],
  providers: [
    CurrencyPipe,
  ],
  exports: [
    NgxImageTaggerComponent
  ]
})
export class NgxImageTaggerModule { }
