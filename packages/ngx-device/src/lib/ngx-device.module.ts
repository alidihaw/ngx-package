import { CommonModule, CurrencyPipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgxDeviceComponent } from './ngx-device.component';

@NgModule({
  declarations: [
    NgxDeviceComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  providers: [
    CurrencyPipe,
  ],
  exports: [
    NgxDeviceComponent
  ]
})
export class NgxDeviceModule { }
