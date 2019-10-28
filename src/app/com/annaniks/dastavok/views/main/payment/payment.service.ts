import { Injectable, Inject } from "@angular/core"
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { CookieService } from "angular2-cookie/services/cookies.service";

@Injectable()
export class PaymentService {

    constructor(private _httpClient: HttpClient, private _cookieService: CookieService) { }

    public createOrder(body) {
        let token = this._cookieService.get("token");
        let headers = new HttpHeaders({
            'token': token,
            'Content-type': "application/json"
        })
        return this._httpClient.post("client/order", body, { headers })
    }

    public getOrderProcessing() {
        let token = this._cookieService.get("token");
        let headers = new HttpHeaders({
            'token': token,
            'Content-type': "application/json"
        })
        return this._httpClient.get("client/orders/processing", { headers })

    }
    public putClient(body) {
        let token = this._cookieService.get('token');
        let headers = new HttpHeaders({
            'token': token,
            'Contact-type': "application/json"
        })
        return this._httpClient.put("client", body, { headers })
    }

    public putOrders(body) {
        let token = this._cookieService.get('token');
        let headers = new HttpHeaders({
            'token': token,
            'Contact-type': "application/json"
        })
        return this._httpClient.put("client/chart/orders/status", body, { headers })
    }
}