import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxEditorComponent } from './ngx-editor/ngx-editor.component';

import { CKEditorModule } from '@ngodings/ckeditor5-angular';
import { FormsModule } from '@angular/forms';
import { SanitizeHtmlPipe } from './sanitize.pipe';
import { NgxViewEditorComponent } from './ngx-view-editor/ngx-view-editor.component';

@NgModule({
  declarations: [
    NgxEditorComponent,
    NgxViewEditorComponent,
    SanitizeHtmlPipe,
  ],
  imports: [
    CommonModule,
    CKEditorModule,
    FormsModule,
  ],
  providers: [
  ],
  exports: [
    NgxEditorComponent,
    NgxViewEditorComponent,
    SanitizeHtmlPipe,
  ]
})
export class NgxEditorModule { }
