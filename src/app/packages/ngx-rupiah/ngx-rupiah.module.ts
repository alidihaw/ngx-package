import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { PackageNgxRupiahComponent } from './ngx-rupiah.component';
import { FormsModule } from '@angular/forms';
import { NgxRupiahModule } from 'packages/ngx-rupiah/src/public-api';

import { MatInputModule } from '@angular/material/input';
import { NgxCopyDirective } from 'packages/ngx-copy/src/public-api';

const routes: Routes = [
    {
        path: '',
        component: PackageNgxRupiahComponent
    },
];

@NgModule({
    declarations: [
        PackageNgxRupiahComponent
    ],
    imports: [
        RouterModule.forChild(routes),
        CommonModule,
        FormsModule,

        MatInputModule,

        NgxRupiahModule,
        NgxCopyDirective,
    ],
    exports: [],
    schemas: [
    ],
})
export class PackageNgxRupiahModule { }
