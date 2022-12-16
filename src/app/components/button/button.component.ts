import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { ColorStandard } from '@models/color';
import { SizeStandard } from '@models/size';
import { AppData } from 'src/app/app.data';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ButtonComponent implements OnInit {
  @Input() color: ColorStandard = ColorStandard.none;
  @Input() size: SizeStandard = SizeStandard.none;
  @Input() title: string = '';
  @Input() isActive = false;
  @Input() isOutline = false;
  @Input() isWide = false;
  @Input() isDisabled = false;
  @Input() isSquare = false;
  @Input() isCircle = false;
  @Input() isFull = false;
  @Input() isLoading = false;
  @Input() isRounded = false;
  @Input() iconLeft = '';
  @Input() imageLeft = '';
  @Input() iconRight = '';
  @Input() imageRight = '';

  @Output() callback = new EventEmitter<boolean>();

  colorValue = '';
  sizeValue = '';

  constructor(public appData: AppData, private router: Router) {
  }

  ngOnInit() {
    if (this.color != ColorStandard.none) {
      this.colorValue = ColorStandard[this.color];
    }
    if (this.size != SizeStandard.none) {
      this.sizeValue = SizeStandard[this.size];
    }
  }

  onCallback() {
    this.callback.emit(true);
  }
}