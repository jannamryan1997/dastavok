
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Inject } from '@angular/core';
import { SignUpService } from '../services/signUp.service';
import { CookieService } from 'ngx-cookie';
import { PARAMETERS } from '@angular/core/src/util/decorators';

function checkIsRelativePath(path: string): boolean {
    return path.includes('assets');
}

export class ApiInterceptor implements HttpInterceptor {

    constructor(
        @Inject('BASE_URL') private _baseUrl: string,
        private _signUpService: SignUpService,
        private _cookieService: CookieService
    ) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (!checkIsRelativePath(req.url)) {
            let httpHeaders: HttpHeaders = req.headers;
            if (this._signUpService.isAuthorized || req.params.get('isAuthorized') === 'true') {
                let token: string = this._cookieService.get('token') || '';
                httpHeaders = httpHeaders.append('Content-Type', 'application/json');
                httpHeaders = httpHeaders.append('token', token);
            }
            const clonedRequest = req.clone({
                url: `${this._baseUrl}${req.url}`,
                headers: httpHeaders
            });
            return next.handle(clonedRequest)
        }
        else {
            return next.handle(req);
        }

    }
}