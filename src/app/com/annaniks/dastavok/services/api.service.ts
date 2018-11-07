import { Injectable, Inject } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { CookieService } from "angular2-cookie/services/cookies.service";

@Injectable()

export class ApiService {

    

    constructor(@Inject('BASE_URL') private baseURL,private _httpClient: HttpClient, public _cookieService: CookieService) { }

    public getUserInfo() {
        let token = this._cookieService.get("accessToken");
        let headers = new HttpHeaders({
            'Content-type': 'application/json',
            'token': token
        })
        return this._httpClient.get(this.baseURL + "client", { headers })
    }
    


}





