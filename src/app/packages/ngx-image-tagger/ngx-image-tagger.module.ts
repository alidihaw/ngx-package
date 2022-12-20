import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PackageNgxImageTaggerComponent } from './ngx-image-tagger.component';
import { FormsModule } from '@angular/forms';
import { NgxImageTaggerModule } from 'packages/ngx-image-tagger/src/public-api';
import { NgxCopyDirective } from 'packages/ngx-copy/src/public-api';

const routes: Routes = [
    {
        path: '',
        component: PackageNgxImageTaggerComponent
    },
];

@NgModule({
    declarations: [
        PackageNgxImageTaggerComponent
    ],
    imports: [
        RouterModule.forChild(routes),
        CommonModule,
        FormsModule,

        NgxImageTaggerModule,

        NgxCopyDirective,
    ],
    exports: [],
    schemas: [
    ],
})
export class PackageNgxImageTaggerModule { }
