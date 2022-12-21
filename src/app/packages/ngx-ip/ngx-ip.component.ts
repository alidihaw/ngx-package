import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { IPService } from 'packages/ngx-ip/src/public-api';
import { AppData } from 'src/app/app.data';
import { AppHelper } from 'src/app/app.helper';

@Component({
    selector: 'ngodings-ngx-ip',
    templateUrl: './ngx-ip.component.html',
    styleUrls: ['./ngx-ip.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class PackageNgxIPComponent implements OnInit {

    data: { ip: string } = {
        ip: '',
    };

    sample1 = `this.ipService.getIP();`;

    constructor(public appHelper: AppHelper, public appData: AppData, private ipService: IPService,) {

    }

    async ngOnInit() {
        this.data.ip = await this.ipService.getIP();
    }
}
