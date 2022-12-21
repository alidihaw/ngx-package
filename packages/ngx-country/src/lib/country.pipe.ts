
import { Pipe, PipeTransform } from '@angular/core';
import { CountryService } from './country.service';

@Pipe({ name: 'countryByAbbreviationPipe' })
export class CountryByAbbreviationPipe implements PipeTransform {
    constructor(private countryService: CountryService) {
    }

    public async transform(value: string): Promise<string> {
        if (value == undefined || value == null) {
            return '-';
        }

        return await this.countryService.getCountryByAbbreviation(value);
    }
}

@Pipe({ name: 'abbreviationByCountryPipe' })
export class AbbreviationByCountryPipe implements PipeTransform {
    constructor(private countryService: CountryService) {
    }

    public async transform(value: string): Promise<string> {
        if (value == undefined || value == null) {
            return '-';
        }

        return await this.countryService.getAbbreviationByCountry(value);
    }
}

@Pipe({ name: 'countryByCodePipe' })
export class CountryByCodePipe implements PipeTransform {
    constructor(private countryService: CountryService) {
    }

    public async transform(value: string): Promise<string> {
        if (value == undefined || value == null) {
            return '-';
        }

        return await this.countryService.getCountryByCode(value);
    }
}

@Pipe({ name: 'codeByCountryPipe' })
export class CodeByCountryPipe implements PipeTransform {
    constructor(private countryService: CountryService) {
    }

    public async transform(value: string): Promise<string> {
        if (value == undefined || value == null) {
            return '-';
        }

        return await this.countryService.getCodeByCountry(value);
    }
}