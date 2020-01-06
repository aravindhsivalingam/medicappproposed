import { Injectable, Optional } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { UrlService } from './url-config';
import { map } from 'rxjs/operators';

@Injectable()
export class AppService {

    constructor(private http: HttpClient, private urlService: UrlService) { }

    getHeaders() {
        const customHeaders = new HttpHeaders().set('Content-Type', 'application/json');
        return { headers: customHeaders };
    }

    createUser(payload: any) {
        return this.http.post(`${this.urlService.getBaseUrl()}/createuser`, payload, this.getHeaders()).pipe(map((response) => {
            return response;
        }));
    }
    validateUser(payload: any) {
        return this.http.post(`${this.urlService.getBaseUrl()}/login`, payload, this.getHeaders()).pipe(map((response) => {
            return response;
        }));
    }

    forgotPassword(payload: any) {
        return this.http.post(`${this.urlService.getBaseUrl()}/forgotPassword`, payload, this.getHeaders()).pipe(map((response) => {
            return response;
        }));
    }
    resetPassword(payload: any) {
        return this.http.post(`${this.urlService.getBaseUrl()}/reset`, payload, this.getHeaders()).pipe(map((response) => {
            return response;
        }));
    }

    getAllPrescriptions() {
        return this.http.get(`${this.urlService.getBaseUrl()}/getAllPrescriptions`, this.getHeaders()).pipe(map((response) => {
            return response;
        }));
    }

    getAllPrescriptionsByEmailId(emailId) {
        return this.http.get(`${this.urlService.getBaseUrl()}/getPrescriptionByEmail?emailId=${emailId}`, this.getHeaders())
            .pipe(map((response) => {
                return response;
            }));
    }
    createPrescription(payload: any) {
        return this.http.post(`${this.urlService.getBaseUrl()}/createprescription`, payload, this.getHeaders()).pipe(map((response) => {
            return response;
        }));
    }
    updatePrescription(payload: any) {
        return this.http.put(`${this.urlService.getBaseUrl()}/editPrescription`, payload, this.getHeaders())
            .pipe(map((response) => {
                return response;
            }));
    }
    getAllNotifications(emailId) {
        return this.http.get(`${this.urlService.getBaseUrl()}/getNotificationsByEmail?emailId=${emailId}`, this.getHeaders())
            .pipe(map((response) => {
                return response;
            }));
    }
    deletePrescription(id) {
        return this.http.delete(`${this.urlService.getBaseUrl()}/deletePrescriptionById?id=${id}`, this.getHeaders())
            .pipe(map((response) => {
                return response.toString();
            }));
    }
    deleteNotification(id) {
        return this.http.delete(`${this.urlService.getBaseUrl()}/deleteNotificationById?id=${id}`, this.getHeaders())
            .pipe(map((response) => {
                return response;
            }));
    }
    requestAccess(payload) {
        return this.http.put(`${this.urlService.getBaseUrl()}/requestPermission`, payload, this.getHeaders())
            .pipe(map((response) => {
                return response;
            }));
    }
    changePrivateState(id) {
        return this.http.put(`${this.urlService.getBaseUrl()}/changePrivateState?id=${id}`, this.getHeaders())
            .pipe(map((response) => {
                return response;
            }));
    }
}
