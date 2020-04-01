import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { UrlService } from './url-config';
import { map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
import { LocalStorage } from '@ngx-pwa/local-storage';

@Injectable()
export class HelperService {

    public prescriptionList = new BehaviorSubject([]);
    public prescriptions = this.prescriptionList.asObservable();
    public apiResponseTime = new BehaviorSubject(' ');
    public chartTime = this.apiResponseTime.asObservable();

    constructor(private http: HttpClient, private urlService: UrlService, private localStorage: LocalStorage) { }

    public prescriptionInCart = (prescription) => { };
    public searchText = (searchText) => { };

    setPrescription(data) {
        this.prescriptionList.next(data);
    }
    // save client id in local
    setDataInBrowser(key: string, data: object) {
        this.localStorage.setItem(key, data).subscribe((clientdata) => {
        }, (err) => {
            console.log(err);
        });
    }

    getDataFromBrowser(key: string, callback: (d) => void) {
        this.localStorage.getItem<object>(key).subscribe((data) => {
            callback(data);
        }, (err) => {
            console.log(err);
        });
    }
}
