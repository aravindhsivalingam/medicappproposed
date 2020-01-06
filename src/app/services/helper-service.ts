import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { UrlService } from './url-config';
import { map } from 'rxjs/operators';

@Injectable()
export class HelperService {

    constructor(private http: HttpClient, private urlService: UrlService) { }

    public prescriptionInCart = (prescription) => { };
}
