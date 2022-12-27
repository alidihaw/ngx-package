import { NgModule } from '@angular/core';
import { NgxArrayPipesModule } from './array';
import { NgxMathPipesModule } from './math';
import { NgxStringPipesModule } from './string';

@NgModule({
    exports: [
        NgxArrayPipesModule,
        NgxStringPipesModule,
        NgxMathPipesModule,
    ],
})
export class NgxPipesModule { }

export * from './array/index';
export * from './math/index';
export * from './string/index';