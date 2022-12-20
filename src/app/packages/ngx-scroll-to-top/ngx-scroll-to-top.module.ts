import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PackageNgxScrollToTopComponent } from './ngx-scroll-to-top.component';
import { FormsModule } from '@angular/forms';
import { NgxScrollToTopModule } from 'packages/ngx-scroll-to-top/src/public-api';
import { NgxCopyDirective } from 'packages/ngx-copy/src/public-api';

const routes: Routes = [
    {
        path: '',
        component: PackageNgxScrollToTopComponent
    },
];

@NgModule({
    declarations: [
        PackageNgxScrollToTopComponent
    ],
    imports: [
        RouterModule.forChild(routes),
        CommonModule,
        FormsModule,

        NgxScrollToTopModule,

        NgxCopyDirective,
    ],
    exports: [],
    schemas: [
    ],
})
export class PackageNgxScrollToTopModule { }
