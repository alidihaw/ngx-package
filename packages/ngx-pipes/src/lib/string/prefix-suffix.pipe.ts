import { Pipe, PipeTransform } from '@angular/core';
import { isString } from '../helpers';

@Pipe({ name: 'prefixsuffix' })
export class PrefixSuffixPipe implements PipeTransform {
    transform(str: string, prefix: string = '', suffix: string = ''): string {
        if (!isString(str)) {
            return str;
        }

        return (!!prefix && isString(prefix) ? prefix : '') + str + (!!suffix && isString(suffix) ? suffix : '');
    }
}