import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { UrlService } from './url-config';
import { map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class HelperService {

    public prescriptionList = new BehaviorSubject([]);
    public prescriptions = this.prescriptionList.asObservable();

    constructor(private http: HttpClient, private urlService: UrlService) { }

    public prescriptionInCart = (prescription) => { };
    public searchText = (searchText) => { };

    setPrescription(data) {
        this.prescriptionList.next(data);
    }
}
