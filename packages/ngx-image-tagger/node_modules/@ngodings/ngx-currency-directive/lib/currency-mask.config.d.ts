import { InjectionToken } from "@angular/core";
export interface CurrencyMaskConfig {
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
    inputMode?: CurrencyMaskInputMode;
}
export declare enum CurrencyMaskInputMode {
    FINANCIAL = 0,
    NATURAL = 1
}
export declare let CURRENCY_MASK_CONFIG: InjectionToken<CurrencyMaskConfig>;
