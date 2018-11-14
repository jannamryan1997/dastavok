import { Injectable, Inject } from "@angular/core"
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { CookieService } from "angular2-cookie/services/cookies.service";

@Injectable()

export class ProfileService {

    constructor(@Inject('BASE_URL') private baseURL, private _httpClient: HttpClient, private _cookieService: CookieService) { }


    getClient() {
        let token = this._cookieService.get('token');
        let headers = new HttpHeaders({
            'Content-type': 'application/json',
            'token': token
        })
        return this._httpClient.get(this.baseURL + "client", { headers })
    }

    putClient(body) {
        let token = this._cookieService.get('token');
        let headers = new HttpHeaders({
            'Content-type': 'application/json',
            'token': token
        })
        console.log(token);

        return this._httpClient.put(this.baseURL + "client", body, { headers })
    }
}

