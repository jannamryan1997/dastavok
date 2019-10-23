
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Inject } from '@angular/core';
import { CookieService } from 'angular2-cookie/services/cookies.service';

export class ApiInterceptor implements HttpInterceptor {

    constructor(@Inject('BASE_URl') private _baseUrl: string, private _cookieService: CookieService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let headers = new HttpHeaders();
        headers = headers.append('Content-Type', 'application/json');
        const clonedRequest = req.clone({
            headers: headers,
            url: `${this._baseUrl}${req.url}`
        });
        return next.handle(clonedRequest)
    }
}