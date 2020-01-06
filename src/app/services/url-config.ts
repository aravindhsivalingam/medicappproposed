import { Injectable } from '@angular/core';

@Injectable()
export class UrlService {

    constructor() { }

    // urlList: any = {
    //     baseUrl: 'https://node-image-converter.herokuapp.com',
    // };
    urlList: any = {
        baseUrl: 'http://localhost:5678',
    };

    getBaseUrl() {
        return this.urlList.baseUrl;
    }
}
