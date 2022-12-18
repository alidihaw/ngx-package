import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { PackageNgxCurrencyComponent } from './ngx-currency.component';
import { FormsModule } from '@angular/forms';
import { NgxCurrencyModule } from 'packages/ngx-currency/src/public-api';

import { MatInputModule } from '@angular/material/input';

const routes: Routes = [
    {
        path: '',
        component: PackageNgxCurrencyComponent
    },
];

@NgModule({
    declarations: [
        PackageNgxCurrencyComponent
    ],
    imports: [
        RouterModule.forChild(routes),
        CommonModule,
        FormsModule,

        MatInputModule,

        NgxCurrencyModule,
    ],
    exports: [],
    schemas: [
    ],
})
export class PackageNgxCurrencyModule { }
