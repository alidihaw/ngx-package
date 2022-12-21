import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { PackageNgxCountryComponent } from './ngx-country.component';
import { FormsModule } from '@angular/forms';
import { NgxCountryModule, CountryService } from 'packages/ngx-country/src/public-api';

import { NgxCopyDirective } from 'packages/ngx-copy/src/public-api';

const routes: Routes = [
    {
        path: '',
        component: PackageNgxCountryComponent
    },
];

@NgModule({
    declarations: [
        PackageNgxCountryComponent
    ],
    imports: [
        RouterModule.forChild(routes),
        CommonModule,
        FormsModule,

        NgxCountryModule,
        NgxCopyDirective,
    ],
    exports: [],
    providers: [CountryService],
    schemas: [
    ],
})
export class PackageNgxCountryModule { }
