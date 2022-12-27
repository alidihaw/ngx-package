import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { PackageNgxPipesComponent } from './ngx-pipes.component';
import { FormsModule } from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { NgxCopyDirective } from 'packages/ngx-copy/src/public-api';

import { MatButtonModule } from '@angular/material/button';
import { NgxPipesModule } from 'packages/ngx-pipes/src/public-api';

const routes: Routes = [
    {
        path: '',
        component: PackageNgxPipesComponent
    },
];

@NgModule({
    declarations: [
        PackageNgxPipesComponent
    ],
    imports: [
        RouterModule.forChild(routes),
        CommonModule,
        FormsModule,

        MatInputModule,
        MatButtonModule,

        NgxCopyDirective,

        NgxPipesModule,
    ],
    exports: [],
    schemas: [
    ],
})
export class PackageNgxPipesModule { }
