import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { PackageNgxCurrencyDirectiveComponent } from './ngx-currency-directive.component';
import { FormsModule } from '@angular/forms';
import { NgxCurrencyModule } from 'packages/ngx-currency-directive/src/public-api';

import { MatInputModule } from '@angular/material/input';

const routes: Routes = [
    {
        path: '',
        component: PackageNgxCurrencyDirectiveComponent
    },
];

@NgModule({
    declarations: [
        PackageNgxCurrencyDirectiveComponent
    ],
    imports: [
        RouterModule.forChild(routes),
        CommonModule,
        FormsModule,

        MatInputModule,

        MatTabsModule,

        NgxCurrencyModule,
    ],
    exports: [],
    schemas: [
    ],
})
export class PackageNgxCurrencyDirectiveModule { }
