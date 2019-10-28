
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Inject } from '@angular/core';

function checkIsRelativePath(path: string): boolean {
    return path.includes('assets');
}

export class ApiInterceptor implements HttpInterceptor {

    constructor(@Inject('BASE_URL') private _baseUrl: string) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let headers = new HttpHeaders();
        headers = headers.append('Content-Type', 'application/json');
        if (!checkIsRelativePath(req.url)) {
            const clonedRequest = req.clone({
                headers: headers,
                url: `${this._baseUrl}${req.url}`
            });
            return next.handle(clonedRequest)
        }
        else {
            return next.handle(req);
        }

    }
}