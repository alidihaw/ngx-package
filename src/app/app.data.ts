import { Injectable } from '@angular/core';
import { Menu } from '@models/menu';

@Injectable({
    providedIn: 'root',
})
export class AppData {

    constructor() {
    }

    private projectValue = 'Ngodings';
    get project(): string {
        return this.projectValue;
    }
    set project(value: string) {
        if (this.projectValue !== value) {
            this.projectValue = value;
        }
    }

    private landingsValue: Menu[] = [
        {
            name: 'Agency',
            url: '/',
        },
    ];
    get landings(): Menu[] {
        return this.landingsValue;
    }
    set landings(value: Menu[]) {
        if (this.landingsValue !== value) {
            this.landingsValue = value;
        }
    }

    isFullPageValue = true;
    get isFullPage(): boolean {
        return this.isFullPageValue;
    }
    set isFullPage(value: boolean) {
        if (this.isFullPageValue !== value) {
            this.isFullPageValue = value;
        }
    }

    private themeValue = 'Cyberpunk';
    get theme(): string {
        return this.themeValue;
    }
    set theme(value: string) {
        if (this.themeValue !== value) {
            this.themeValue = value;
        }
    }
}

