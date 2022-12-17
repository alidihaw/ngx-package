import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CurrencyMaskInputMode } from 'packages/ngx-currency-directive/src/public-api';
import { AppHelper } from 'src/app/app.helper';

@Component({
    selector: 'ngodings-ngx-currency-directive',
    templateUrl: './ngx-currency-directive.component.html',
    styleUrls: ['./ngx-currency-directive.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class PackageNgxCurrencyDirectiveComponent implements OnInit {

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
    ,}

    constructor(public appHelper: AppHelper) {

    }

    async ngOnInit() {
    }
}
