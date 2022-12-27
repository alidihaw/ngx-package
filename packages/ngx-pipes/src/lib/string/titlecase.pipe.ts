import { Pipe, PipeTransform } from '@angular/core';
import { isString, ucFirst } from '../helpers';

@Pipe({ name: 'titlecase' })
export class TitlecasePipe implements PipeTransform {
    transform(input: string): string;
    transform(input: any): any;

    transform(text: any): string {
        if (isString(text)) {
            return text
                .split(' ')
                .map((sub: any) => ucFirst(sub))
                .join(' ');
        }

        return text;
    }
}