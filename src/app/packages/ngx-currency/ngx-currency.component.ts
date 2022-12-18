import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CurrencyMaskInputMode } from 'packages/ngx-currency/src/public-api';
import { AppData } from 'src/app/app.data';
import { AppHelper } from 'src/app/app.helper';

@Component({
    selector: 'ngodings-ngx-currency',
    templateUrl: './ngx-currency.component.html',
    styleUrls: ['./ngx-currency.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class PackageNgxCurrencyComponent implements OnInit {

    data = {
        value: 0,
    };

    config = { 
        prefix: '$ ', 
        thousands: '.', 
        decimal: ',', 
        suffix: "",
        align: 'right', 
        precision: 2, 
        min: 0,
        max: undefined, 
        inputMode: CurrencyMaskInputMode.FINANCIAL, 
        allowNegative: true,
        allowZero: true
    }

    constructor(public appHelper: AppHelper, public appData: AppData,) {

    }

    async ngOnInit() {
    }
}
