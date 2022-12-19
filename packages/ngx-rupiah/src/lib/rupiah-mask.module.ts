import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RupiahMaskDirective } from "./rupiah-mask.directive";
import { RUPIAH_MASK_CONFIG, RupiahMaskConfig } from "./rupiah-mask.config";
import { TerbilangPipe } from './terbilang.pipe';
import { RupiahPipe } from './rupiah.pipe';

@NgModule({
    imports: [CommonModule, FormsModule],
    declarations: [RupiahMaskDirective, TerbilangPipe, RupiahPipe],
    exports: [RupiahMaskDirective, TerbilangPipe, RupiahPipe]
})
export class NgxRupiahModule {
    static forRoot(config: RupiahMaskConfig): ModuleWithProviders<NgxRupiahModule> {
        return {
            ngModule: NgxRupiahModule,
            providers: [{
                provide: RUPIAH_MASK_CONFIG,
                useValue: config,
            }]
        }
    }
}