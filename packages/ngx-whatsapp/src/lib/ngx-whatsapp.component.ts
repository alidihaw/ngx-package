import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'ngx-whatsapp',
  templateUrl: './ngx-whatsapp.component.html',
  styleUrls: ['./ngx-whatsapp.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class NgxWhatsappComponent implements OnInit {

  @Input() phoneNumber = '';
  @Input() message = '';
  @Input() rightPosition = '20px';
  @Input() bottomPosition = '100px';

  whatsappImage = 'https://firebasestorage.googleapis.com/v0/b/mti-group-96.appspot.com/o/assets%2Fwhatsapp.svg?alt=media&token=5b56384b-bea6-42b4-a2df-5f9b414a60f7';

  constructor() {
  }

  ngOnInit() {
  }

  goToLink() {
    window.open('https://wa.me/' + this.phoneNumber + "?text=" + this.message), "_blank";
  }
}
