import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PackageNgxEditorComponent } from './ngx-editor.component';
import { FormsModule } from '@angular/forms';
import { NgxEditorModule } from 'packages/ngx-editor/src/public-api';
import { NgxCopyDirective } from 'packages/ngx-copy/src/public-api';

const routes: Routes = [
    {
        path: '',
        component: PackageNgxEditorComponent
    },
];

@NgModule({
    declarations: [
        PackageNgxEditorComponent
    ],
    imports: [
        RouterModule.forChild(routes),
        CommonModule,
        FormsModule,

        NgxEditorModule,

        NgxCopyDirective,
    ],
    exports: [],
    schemas: [
    ],
})
export class PackageNgxEditorModule { }
