import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CopyrightComponent } from './copyright.component';

@NgModule({
  declarations: [
    CopyrightComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    CopyrightComponent,
  ],
  providers: [],
})
export class CopyrightModule { }
