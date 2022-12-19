import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { RupiahMaskInputMode, RupiahService } from 'packages/ngx-rupiah/src/public-api';
import { AppData } from 'src/app/app.data';
import { AppHelper } from 'src/app/app.helper';

@Component({
    selector: 'ngodings-ngx-rupiah',
    templateUrl: './ngx-rupiah.component.html',
    styleUrls: ['./ngx-rupiah.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class PackageNgxRupiahComponent implements OnInit {

    data = {
        value: 0,
    };

    terbilangValue = {
        value: 1250000,
        valueString: '',
        value2: 25000000,
        valueString2: '',
        value3: 5000,
        valueString3: '',
    }

    sampleTerbilang = `this.rupiahService.getTerbilang(1250000);
this.rupiahService.getTerbilang(25000000);
this.rupiahService.getTerbilang(5000);
`;

    sampleTerbilangPipe = `{{ 1250000 | terbilangPipe }}
{{ 25000000 | terbilangPipe }}
{{ 5000 | terbilangPipe }}
`;

    sampleRupiahPipe = `{{ 1250000 | rupiahPipe }}
{{ 25000000 | rupiahPipe }}
{{ 5000 | rupiahPipe }}
`;

    constructor(public appHelper: AppHelper, public appData: AppData, private rupiahService: RupiahService,) {

    }

    async ngOnInit() {
        this.terbilangValue.valueString = this.rupiahService.getTerbilang(this.terbilangValue.value);
        this.terbilangValue.valueString2 = this.rupiahService.getTerbilang(this.terbilangValue.value2);
        this.terbilangValue.valueString3 = this.rupiahService.getTerbilang(this.terbilangValue.value3);
    }
}
