import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";


@Injectable({
    providedIn: 'root',
})
export class IPService {
    ip: string = '';

    ipURL = 'https://api.ipify.org?format=json';

    constructor(private http: HttpClient) {
    }

    async getIP(): Promise<string> {
        return new Promise(async (resolve) => {
            if (this.ip) {
                resolve(this.ip);
            }
            this.http.get(this.ipURL)
                .subscribe((data: any) => {
                    this.ip = data?.ip;
                    resolve(this.ip);
                });
        });
    }
}