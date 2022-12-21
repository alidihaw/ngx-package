import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CountryAbbreviation, CountryCode, CountryService } from 'packages/ngx-country/src/public-api';
import { AppData } from 'src/app/app.data';
import { AppHelper } from 'src/app/app.helper';

@Component({
    selector: 'ngodings-ngx-country',
    templateUrl: './ngx-country.component.html',
    styleUrls: ['./ngx-country.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class PackageNgxCountryComponent implements OnInit {

    data: { countryCodes: CountryCode[], countries: CountryAbbreviation[], country: string, abbreviation: string, code: string } = {
        country: 'Singapore',
        abbreviation: 'SG',
        code: '+65',
        countryCodes: [],
        countries: [],
    };

    sample1 = `await this.countryService.getCountries();`;

    sample2 = `await this.countryService.getCountryCodes();`;

    sample3 = `await this.countryService.getAbbreviationByCountry('Singapore')`;

    sample4 = `await this.countryService.getCodeByCountry('Singapore')`;

    sample5 = `await this.countryService.getCountryByCode('+65');`;

    sample6 = `await this.countryService.getCountryByAbbreviation('SG');`;

    sample7 = `{{ 'SG'| countryByAbbreviationPipe | async }}`;

    sample8 = `{{ 'Singapore'| abbreviationByCountryPipe | async }}`;

    sample9 = `{{ '+65'| countryByCodePipe | async }}`;

    sample10 = `{{ 'Singapore'| codeByCountryPipe | async }}`;

    constructor(public appHelper: AppHelper, public appData: AppData, private countryService: CountryService,) {

    }

    async ngOnInit() {
        this.data.countries = await this.countryService.getCountries();
        this.data.countryCodes = await this.countryService.getCountryCodes();
        this.data.abbreviation = await this.countryService.getAbbreviationByCountry(this.data.country);
        this.data.code = await this.countryService.getCodeByCountry(this.data.country);
        this.data.country = await this.countryService.getCountryByCode(this.data.code);
        this.data.country = await this.countryService.getCountryByAbbreviation(this.data.abbreviation);
    }
}
