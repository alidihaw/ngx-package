import { InjectionToken } from "@angular/core";

export interface RupiahMaskConfig {
    align: string;
    allowNegative: boolean;
    allowZero: boolean;
    decimal: string;
    precision: number;
    prefix: string;
    suffix: string;
    thousands: string;
    nullable: boolean;
    min?: number;
    max?: number;
    inputMode?: RupiahMaskInputMode;
}

export enum RupiahMaskInputMode {
    FINANCIAL,
    NATURAL,
}

export let RUPIAH_MASK_CONFIG = new InjectionToken<RupiahMaskConfig>("currency.mask.config");