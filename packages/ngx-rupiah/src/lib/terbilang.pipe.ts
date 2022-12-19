
import { Pipe, PipeTransform } from '@angular/core';
import { RupiahService } from './rupiah.service';

@Pipe({ name: 'terbilangPipe' })
export class TerbilangPipe implements PipeTransform {
    constructor(private rupiahService: RupiahService) {

    }

    public transform(value: number): string {
        if (value == undefined || value == null) {
            return '-';
        }

        return this.rupiahService.getTerbilang(value);
    }
}