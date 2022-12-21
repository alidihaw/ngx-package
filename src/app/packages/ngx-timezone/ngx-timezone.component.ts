import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { TimezoneService } from 'packages/ngx-timezone/src/public-api';
import { AppData } from 'src/app/app.data';
import { AppHelper } from 'src/app/app.helper';

@Component({
    selector: 'ngodings-ngx-timezone',
    templateUrl: './ngx-timezone.component.html',
    styleUrls: ['./ngx-timezone.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class PackageNgxTimezoneComponent implements OnInit {

    data: { timezone: string, country: string, timezones: string[], timezonesAll: any } = {
        timezone: '',
        country: '',
        timezones: [],
        timezonesAll: {},
    };

    sample1 = `this.timezoneService.timezone;`;

    sample2 = `await this.timezoneService.convertTimezoneToCountry('Asia/Jakarta');`;

    sample3 = `{{ 'Asia/Jakarta'| timezoneToCountryPipe | async }}`;

    sample4 = `await this.timezoneService.getListTimezoneFromCountry('Indonesia');`;

    sample5 = `await this.timezoneService.getListTimezones();`;

    constructor(public appHelper: AppHelper, public appData: AppData, private timezoneService: TimezoneService,) {

    }

    async ngOnInit() {
        this.data.timezone = this.timezoneService.timezone;
        this.data.country = await this.timezoneService.convertTimezoneToCountry(this.data.timezone);
        this.data.timezones = await this.timezoneService.getListTimezoneFromCountry(this.data.country);
        this.data.timezonesAll = await this.timezoneService.getListTimezones();
    }
}
