import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AppData } from 'src/app/app.data';
import { AppHelper } from 'src/app/app.helper';

@Component({
    selector: 'ngodings-ngx-copy',
    templateUrl: './ngx-copy.component.html',
    styleUrls: ['./ngx-copy.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class PackageNgxCurrencyComponent implements OnInit {

    input = 'Lorem ipsum dolor sit amet';
    
    sample1 = `<div ngxCopy #copySample1="copy">
     <h4><b>Title</b></h4>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam rutrum augue at ante sollicitudin posuere. Pellentesque congue consequat enim quis luctus.
</div>
<button mat-raised-button color="primary" (click)="copySample1.copy()">Copy</button>`;

    sample2 = `<div ngxCopy #copySample2="copy">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam rutrum augue at ante sollicitudin posuere. Pellentesque congue consequat enim quis luctus.
</div>
<button mat-raised-button color="primary" (click)="copySample2.copy()">Copy</button>`;

    sample3 = `<mat-form-field class="input-sample">
    <mat-label>Sample</mat-label>
    <input matInput placeholder="Sample" [(ngModel)]="input" ngxCopy #copySample3="copy" >
</mat-form-field>
<button mat-raised-button color="primary" (click)="copySample3.copy()">Copy</button>`;

    constructor(public appHelper: AppHelper, public appData: AppData,) {

    }

    async ngOnInit() {
    }
}
