import { Pipe, PipeTransform } from '@angular/core';
import { applyPrecision } from '../helpers';

@Pipe({ name: 'precision' })
export class PrecisionPipe implements PipeTransform {
    transform(num: number, precision: number = 0): number {
        return applyPrecision(num, precision);
    }
}