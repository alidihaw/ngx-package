import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';

import { ButtonModule } from '@components/button/button.module';

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
    ],
    exports: [],
    schemas: [
    ],
})
export class HomeModule { }
