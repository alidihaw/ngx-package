import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AppData } from './app.data';

@Injectable({
    providedIn: 'root',
})
export class AppHelper {
    constructor(private appData: AppData, private router: Router,) {

    }

    goToURL(link?: string) {
        if (link) {
            window.scroll({
                top: 0,
                left: 0,
                behavior: 'smooth'
            });

            this.router.navigateByUrl(link!);
        }
    }

    scrollToElement(id: string): void {
        console.log("scrollToElement", id);
        let element = document.getElementById(id);
        console.log("scrollToElement", element);
        element?.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
    }

    scrollToTop() {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }

    goToLink(link: string) {
        window.open(link, "_blank");
    }
}
