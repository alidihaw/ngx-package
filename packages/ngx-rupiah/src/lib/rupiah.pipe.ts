
import { Pipe, PipeTransform } from '@angular/core';

import { formatCurrency, getCurrencySymbol } from '@angular/common';
import { registerLocaleData } from '@angular/common';
import localeID from '@angular/common/locales/id';

@Pipe({ name: 'rupiahPipe' })
export class RupiahPipe implements PipeTransform {
    constructor() {
        registerLocaleData(localeID, 'id');
    }

    public transform(value: number, position: 'start' | 'end' | 'neutral' = 'start'): string {
        if (value == undefined || value == null) {
            return '-';
        }
        let price = formatCurrency(
            value,
            'id-ID',
            '',
            'IDR',
            '1.2-2',
        );

        let result = '';

        if (position === 'start') {
            result = 'Rp' + price;
        } else if (position === 'end') {
            result = price + ' Rupiah';
        } else {
            result = price;
        }
        return result;
    }
}