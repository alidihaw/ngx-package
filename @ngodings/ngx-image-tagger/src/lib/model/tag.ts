export interface Tagged {
    id: string;
    name?: string;
    url?: string;
    priceCurrency?: string;
    price?: number;
    x: number;
    y: number;
    open: boolean;
    isOffsideX: boolean;
    isOffsideY: boolean;
    tagger: TaggerModel;
}

export interface TaggerModel {
    idParent: string;
    id: string;
    style?: string;
    x?: number;
    y?: number;
    isOffsideX?: boolean;
    isOffsideY?: boolean;
    url: string;
    urlShop?: string;
    tags: Tagged[];
}
