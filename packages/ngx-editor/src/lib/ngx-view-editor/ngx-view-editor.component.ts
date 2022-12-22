import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'ngx-view-editor',
  templateUrl: './ngx-view-editor.component.html',
  styleUrls: ['./ngx-view-editor.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class NgxViewEditorComponent implements OnInit {
  @Input() data = '';
  @Input() customClass = '';

  constructor() {
  }

  ngOnInit() {
  }
}
