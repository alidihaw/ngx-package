import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CountryAbbreviation, CountryCode } from "./model/country";


@Injectable({
    providedIn: 'root',
})
export class CountryService {
    countries: CountryAbbreviation[] = [];
    countyCodes: CountryCode[] = [];

    countryURL = 'https://raw.githubusercontent.com/alidihaw/ngodings/master/public/country.json';
    countryCodeURL = 'https://raw.githubusercontent.com/alidihaw/ngodings/master/public/countryCode.json';

    constructor(private http: HttpClient) {
    }

    async getCountries(): Promise<CountryAbbreviation[]> {
        return new Promise(async (resolve) => {
            if (this.countries && this.countries?.length > 0) {
                resolve(this.countries);
            }
            this.http.get(this.countryURL)
                .subscribe((data: any) => {
                    this.countries = data;
                    resolve(this.countries);
                    return this.countries;
                });
        });
    }

    async getCountryCodes(): Promise<CountryCode[]> {
        return new Promise(async (resolve) => {
            if (this.countyCodes && this.countyCodes?.length > 0) {
                resolve(this.countyCodes);
            }
            this.http.get(this.countryCodeURL)
                .subscribe((data: any) => {
                    this.countyCodes = data;
                    resolve(this.countyCodes);
                    return this.countyCodes;
                });
        });
    }

    async getCountryByAbbreviation(abbrevation: string): Promise<string> {
        let result = '';
        await this.getCountries();
        const countries = this.countries?.filter((item) => item.abbreviation == abbrevation);
        if (countries && countries?.length > 0) {
            result = countries[0].country;
        }
        return result;
    }

    async getAbbreviationByCountry(country: string): Promise<string> {
        let result = '';
        await this.getCountries();
        const countries = this.countries?.filter((item) => item.country == country);
        if (countries && countries?.length > 0) {
            result = countries[0].abbreviation;
        }
        return result;
    }

    async getCountryByCode(code: string): Promise<string> {
        let result = '';
        await this.getCountryCodes();
        const countyCodes = this.countyCodes?.filter((item) => item.code == code);
        if (countyCodes && countyCodes?.length > 0) {
            result = countyCodes[0].name;
        }
        return result;
    }

    async getCodeByCountry(country: string): Promise<string> {
        let result = '';
        await this.getCountryCodes();
        const countyCodes = this.countyCodes?.filter((item) => item.name == country);
        if (countyCodes && countyCodes?.length > 0) {
            result = countyCodes[0].code;
        }
        return result;
    }
}