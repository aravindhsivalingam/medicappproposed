import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

declare var $: any;

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private router: Router) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('req url ', req.url);
    return next.handle(req).pipe(
      tap(
        event => this.handleResponse(req, event),
        error => this.handleError(req, error)
      )
    );
  }


  handleResponse(req: HttpRequest<any>, event) {
    console.log('Handling response for ', req.url, event);
  }

  handleError(req: HttpRequest<any>, event) {
    if (event.error.status === 401) {
      console.log('401');
    }
  }
}
