import { NgModule } from '@angular/core';
import { AorAnPipe } from './a-or-an.pipe';
import { FirstCasePipe } from './firstcase.pipe';
import { PrefixSuffixPipe } from './prefix-suffix.pipe';
import { ShortenPipe } from './shorten.pipe';
import { TimeAgoPipe } from './timeago.pipe';
import { TitlecasePipe } from './titlecase.pipe';

const PIPES = [
    TimeAgoPipe,
    AorAnPipe,
    ShortenPipe,
    FirstCasePipe,
    TitlecasePipe,
    PrefixSuffixPipe,
];

@NgModule({
    declarations: PIPES,
    imports: [],
    exports: PIPES,
})
export class NgxStringPipesModule { }

export { TimeAgoPipe } from './timeago.pipe';
export { ShortenPipe } from './shorten.pipe';
export { FirstCasePipe } from './firstcase.pipe';
export { TitlecasePipe } from './titlecase.pipe';
export { PrefixSuffixPipe } from './prefix-suffix.pipe';
export { AorAnPipe } from './a-or-an.pipe';