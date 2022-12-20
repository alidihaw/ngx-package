
import { Pipe, PipeTransform } from '@angular/core';
import { TimezoneService } from './timezone.service';

@Pipe({ name: 'timezoneToCountryPipe' })
export class TimezoneToCountryPipe implements PipeTransform {
    constructor(private trmezoneService: TimezoneService) {
    }

    public async transform(value: string): Promise<string> {
        if (value == undefined || value == null) {
            return '-';
        }

        return await this.trmezoneService.convertTimezoneToCountry(value);
    }
}