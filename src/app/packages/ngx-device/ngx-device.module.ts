import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgxDeviceModule } from 'packages/ngx-device/src/public-api';
import { NgxCopyDirective } from 'packages/ngx-copy/src/public-api';
import { PackageNgxDeviceComponent } from './ngx-device.component';

const routes: Routes = [
    {
        path: '',
        component: PackageNgxDeviceComponent
    },
];

@NgModule({
    declarations: [
        PackageNgxDeviceComponent
    ],
    imports: [
        RouterModule.forChild(routes),
        CommonModule,
        FormsModule,

        NgxDeviceModule,

        NgxCopyDirective,
    ],
    exports: [],
    schemas: [
    ],
})
export class PackageNgxDeviceModule { }
