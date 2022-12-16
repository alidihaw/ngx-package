import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
];

@NgModule({
    declarations: [
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
