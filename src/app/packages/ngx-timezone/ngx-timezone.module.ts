import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { PackageNgxTimezoneComponent } from './ngx-timezone.component';
import { FormsModule } from '@angular/forms';
import { NgxTimezoneModule, TimezoneService } from 'packages/ngx-timezone/src/public-api';

import { NgxCopyDirective } from 'packages/ngx-copy/src/public-api';

const routes: Routes = [
    {
        path: '',
        component: PackageNgxTimezoneComponent
    },
];

@NgModule({
    declarations: [
        PackageNgxTimezoneComponent
    ],
    imports: [
        RouterModule.forChild(routes),
        CommonModule,
        FormsModule,

        NgxTimezoneModule,
        NgxCopyDirective,
    ],
    exports: [],
    providers: [TimezoneService],
    schemas: [
    ],
})
export class PackageNgxTimezoneModule { }
