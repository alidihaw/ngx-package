import { NgModule } from '@angular/core';
import { RangePipe } from './range.pipe';
import { ReversePipe } from './reverse.pipe';
import { UniquePipe } from './unique.pipe';
import { FilterByPipe } from './filterby.pipe';
import { OrderByPipe } from './orderby.pipe';

const PIPES = [
    RangePipe,
    ReversePipe,
    UniquePipe,
    FilterByPipe,
    OrderByPipe,
];

@NgModule({
    declarations: PIPES,
    imports: [],
    exports: PIPES,
})
export class NgxArrayPipesModule { }

export { RangePipe } from './range.pipe';
export { ReversePipe } from './reverse.pipe';
export { UniquePipe } from './unique.pipe';
export { FilterByPipe } from './filterby.pipe';
export { OrderByPipe } from './orderby.pipe';