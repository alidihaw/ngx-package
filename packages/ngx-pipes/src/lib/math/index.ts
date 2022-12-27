import { NgModule } from '@angular/core';
import { AveragePipe } from './average.pipe';
import { BytesPipe } from './bytes.pipe';
import { MaxPipe } from './max.pipe';
import { MinPipe } from './min.pipe';
import { PrecisionPipe } from './precision.pipe';
import { SumPipe } from './sum.pipe';

const PIPES = [
    MinPipe,
    MaxPipe,
    SumPipe,
    AveragePipe,
    PrecisionPipe,
    BytesPipe,
];

@NgModule({
    declarations: PIPES,
    imports: [],
    exports: PIPES,
})
export class NgxMathPipesModule { }

export { MinPipe } from './min.pipe';
export { MaxPipe } from './max.pipe';
export { SumPipe } from './sum.pipe';
export { AveragePipe } from './average.pipe';
export { PrecisionPipe } from './precision.pipe';
export { BytesPipe } from './bytes.pipe';