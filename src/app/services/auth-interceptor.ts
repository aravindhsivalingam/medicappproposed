import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { HelperService } from './helper-service';
declare var $: any;

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private router: Router, private helperService: HelperService) { }
  public diffTime: any;
  public chartTime = (param) => { };
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('req url ', req.url);
    const start = performance.now();
    return next.handle(req).pipe(
      tap(
        event => this.handleResponse(req, event, start),
        error => this.handleError(req, error)
      )
    );
  }


  handleResponse(req: HttpRequest<any>, event, start) {
    console.log('Handling response for ', req.url, event);
    if (req.url.includes('login') && event.status === 200) {
      this.diffTime = (performance.now() - start);
      this.helperService.apiResponseTime.next(this.diffTime.toFixed(4));
    }
  }

  handleError(req: HttpRequest<any>, event) {
    if (event.error.status === 401) {
      console.log('401');
    }
  }
}
