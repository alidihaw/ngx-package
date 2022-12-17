import { Injectable } from '@angular/core';
import { Meta } from '@angular/platform-browser';

export interface MetaModel {
    title : string,
    desc : string,
    keywords?: string,
    type?: string,
    image?: string
}
@Injectable({
    providedIn: 'root'
})

export class MetaService {

    constructor(
        private meta :Meta,
    ) { }

    setMeta(payload: MetaModel) {

        // Google Format
        this.meta.updateTag({ name: 'title', content: payload.title, },);
        this.meta.updateTag({ name: 'description', content: payload.desc, },);

        // Open Graph/ Facebook Format
        this.meta.updateTag({ name: 'og:title', content: payload.title, },);
        this.meta.updateTag({ name: 'og:description', content: payload.desc, },);
        this.meta.updateTag({ name: 'og:type', content: payload.type || 'website' },);
        this.meta.updateTag({ name: 'og:image', content: payload.image || 'https://raw.githubusercontent.com/alidihaw/ngodings/e7ae96381be044b27a169af78bec8f689fbfd8a7/src/assets/icons/icon-512x512.png' },);
        this.meta.updateTag({ name: 'og:url', content: window.location.href },);

        // Twitter Format
        this.meta.updateTag({ name: 'twitter:card', content: "summary_large_image" },);
        this.meta.updateTag({ name: 'twitter:title', content: payload.title, },);
        this.meta.updateTag({ name: 'twitter:description', content: payload.desc, },);
        this.meta.updateTag({ name: 'twitter:image', content: payload.image || 'https://raw.githubusercontent.com/alidihaw/ngodings/e7ae96381be044b27a169af78bec8f689fbfd8a7/src/assets/icons/icon-512x512.png' },);
        this.meta.updateTag({ name: 'twitter:url', content: window.location.href },);

        // General
        this.meta.updateTag({ name: 'canonical', content: window.location.href },);
        this.meta.updateTag({ name: 'robots', content: payload.title, });
        this.meta.updateTag({ name: 'author', content: 'Ngodings', },);

        if(payload.keywords) {
            this.meta.updateTag({ name: 'keywords', content: payload.keywords },);
        }
    }


    
}