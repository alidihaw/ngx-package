import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonModule } from '@components/button/button.module';

import { FooterComponent } from './footer.component';

@NgModule({
  declarations: [
    FooterComponent,
  ],
  imports: [
    CommonModule,
    ButtonModule,
  ],
  exports: [
    FooterComponent,
  ],
  providers: [],
})
export class FooterModule { }
