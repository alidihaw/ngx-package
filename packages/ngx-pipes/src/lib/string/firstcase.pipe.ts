import { Pipe, PipeTransform } from '@angular/core';
import { isString, ucFirst } from '../helpers';

@Pipe({ name: 'firstcase' })
export class FirstCasePipe implements PipeTransform {
  transform(input: string): string;
  transform(input: any): any;

  transform(text: any): string {
    return isString(text) ? ucFirst(text) : text;
  }
}