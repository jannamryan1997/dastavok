import { Injectable, Inject } from "@angular/core"
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { CookieService } from "angular2-cookie/services/cookies.service";

@Injectable()

export class PaymentService {

    constructor(@Inject('BASE_URL') private _baseUrl, private _httpClient: HttpClient, private _cookieService: CookieService) { }

    public createOrder(body) {
        let token = this._cookieService.get("token")
        let headers = new HttpHeaders({
            'token': token,
            'Content-type': "application/json"
        })
    return    this._httpClient.post(this._baseUrl + "client/order", body, { headers })
    }
}