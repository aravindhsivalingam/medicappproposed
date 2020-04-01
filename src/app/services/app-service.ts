import { Injectable, Optional } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { UrlService } from './url-config';
import { map } from 'rxjs/operators';
import * as firebase from 'firebase';
import { environment } from 'src/environments/environment';
import { EncrpDecrpService } from './encryptService';

@Injectable()
export class AppService {

    constructor(private http: HttpClient, private urlService: UrlService, private encryptService: EncrpDecrpService) { }

    getHeaders() {
        const customHeaders = new HttpHeaders().set('Content-Type', 'application/json');
        return { headers: customHeaders };
    }

    createUser(payload: any) {
        return this.http.post(`${this.urlService.getBaseUrl()}/createuser`, payload, this.getHeaders()).pipe(map((response) => {
            return response;
        }));
    }
    validateUser(email: any) {
        return this.http.post(`${this.urlService.getBaseUrl()}/validateUser`, { emailId: email }, this.getHeaders())
            .pipe(map((response) => {
                return response;
            }));
    }
    loginUser(payload: any) {
        return this.http.post(`${this.urlService.getBaseUrl()}/login`, payload, this.getHeaders()).pipe(map((response) => {
            return response;
        }));
    }
    loginWithOtp(payload: any) {
        return this.http.post(`${this.urlService.getBaseUrl()}/loginWithOtp`, payload, this.getHeaders()).pipe(map((response) => {
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
        return this.http.post(`${this.urlService.getBaseUrl()}/getAllPrescriptions`, this.getHeaders()).pipe(map((response) => {
            return response;
        }));
    }

    getAllPrescriptionsByEmailId(emailId) {
        const email = this.encryptService.encrypt(emailId);
        return this.http.post(`${this.urlService.getBaseUrl()}/getPrescriptionByEmail`, { emailId: email }, this.getHeaders())
            .pipe(map((response) => {
                return response;
            }));
    }
    getAllNotifications(emailId) {
        const email = this.encryptService.encrypt(emailId);
        return this.http.post(`${this.urlService.getBaseUrl()}/getNotificationsByEmail`, { emailId: email }, this.getHeaders())
            .pipe(map((response) => {
                return response;
            }));
    }
    getUserInfo(emailId) {
        const email = this.encryptService.encrypt(emailId);
        return this.http.post(`${this.urlService.getBaseUrl()}/getUserData`, { emailId: email }, this.getHeaders())
            .pipe(map((response) => {
                return response;
            }));
    }
    updateUser(payload: any) {
        return this.http.post(`${this.urlService.getBaseUrl()}/updateUser`, payload, this.getHeaders()).pipe(map((response) => {
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
    changePrivateState(payload) {
        return this.http.put(`${this.urlService.getBaseUrl()}/changePrivateState`, payload, this.getHeaders())
            .pipe(map((response) => {
                return response;
            }));
    }
    toggleTwoFactorAuth(payload) {
        return this.http.put(`${this.urlService.getBaseUrl()}/toggleTwoFactorAuth`, { email: payload }, this.getHeaders())
            .pipe(map((response) => {
                return response;
            }));
    }
    logout() {
        if (!firebase.apps.length) {
            firebase.initializeApp(environment.firebase);
            firebase.auth().signOut();
        }
    }
}
