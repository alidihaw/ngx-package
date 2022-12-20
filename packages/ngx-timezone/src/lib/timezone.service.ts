import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";


@Injectable({
    providedIn: 'root',
})
export class TimezoneService {
    countries = [];
    timezones: any;

    timezoneURL = 'https://raw.githubusercontent.com/alidihaw/ngodings/master/public/timezone.json';

    constructor(private http: HttpClient) {
    }

    getTimezone() {
        return new Promise(async (resolve) => {
            if (this.timezones) {
                resolve(true);
            }
            this.http.get(this.timezoneURL)
                .subscribe((data: any) => {
                    this.timezones = data;
                    resolve(true);
                });
        });
    }

    get timezone(): string {
        return Intl.DateTimeFormat()?.resolvedOptions()?.timeZone;
    }

    async convertTimezoneToCountry(timezone: string): Promise<string> {
        await this.getTimezone();
        return this.timezones[timezone];
    }

    async getListTimezoneFromCountry(country: string): Promise<string[]> {
        let timezones: string[] = [];
        await this.getTimezone();
        Object.keys(this.timezones)?.forEach((key) => {
            if (this.timezones[key] === country) {
                timezones.push(key);
            }
        });
        return timezones;
    }

    async getListTimezones(): Promise<{}> {
        await this.getTimezone();
        return this.timezones;
    }
}