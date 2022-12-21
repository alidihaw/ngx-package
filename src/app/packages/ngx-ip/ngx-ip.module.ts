import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { PackageNgxIPComponent } from './ngx-ip.component';
import { FormsModule } from '@angular/forms';
import { NgxIPModule, IPService } from 'packages/ngx-ip/src/public-api';

import { NgxCopyDirective } from 'packages/ngx-copy/src/public-api';

const routes: Routes = [
    {
        path: '',
        component: PackageNgxIPComponent
    },
];

@NgModule({
    declarations: [
        PackageNgxIPComponent
    ],
    imports: [
        RouterModule.forChild(routes),
        CommonModule,
        FormsModule,

        NgxIPModule,
        NgxCopyDirective,
    ],
    exports: [],
    providers: [IPService],
    schemas: [
    ],
})
export class PackageNgxIPModule { }
