import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';

import { FormsModule } from '@angular/forms';
import { NgxPipesModule } from 'packages/ngx-pipes/src/public-api';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
];

@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [
        RouterModule.forChild(routes),
        CommonModule,
        FormsModule,
        NgxPipesModule,
    ],
    exports: [],
    schemas: [
    ],
})
export class HomeModule { }
