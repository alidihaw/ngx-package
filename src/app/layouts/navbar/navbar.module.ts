import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NavbarComponent } from './navbar.component';

@NgModule({
  declarations: [
    NavbarComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    NavbarComponent,
  ],
  providers: [],
})
export class NavbarModule { }
