import { Injectable, Inject } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { CookieService } from "angular2-cookie/services/cookies.service";


@Injectable()

export class CardService {

    constructor(@Inject('BASE_URL') private _baseUrl, private _httpClient: HttpClient, private _cookieService: CookieService) { }


    public getOrderChart() {
        let token = this._cookieService.get('token');
        let headers = new HttpHeaders({
            'Content-type': 'application/json',
            'token': token,

        })
        return this._httpClient.get(this._baseUrl + "client/orders/chart", { headers })
    }

    public deleteOrderChart(orderId: number, orderGoodsId: number) {
        let token = this._cookieService.get('token');
        let headers = new HttpHeaders({
            'Content-type': 'application/json',
            'token': token,

        })
        return this._httpClient.delete(this._baseUrl + `client/chart/good/${orderId}/${orderGoodsId}`, { headers })
    }


    public deleteItemOrderChart(orderId) {
        let token = this._cookieService.get('token');
        let headers = new HttpHeaders({
            'Content-type': 'application/json',
            'token': token,
        })
        return this._httpClient.delete(this._baseUrl + "client/chart/order/" + orderId,{headers})
    }
}