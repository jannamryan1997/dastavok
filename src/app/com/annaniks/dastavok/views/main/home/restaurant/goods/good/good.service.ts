import { Injectable, Inject } from "@angular/core"
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { CookieService } from "angular2-cookie/services/cookies.service";

@Injectable()

export class GoodService {

    constructor(@Inject('BASE_URL') private _baseUrl, private _httpClient: HttpClient, private _cookieService: CookieService) { }

    getGood(id) {
        return this._httpClient.get(this._baseUrl + "freeclient/good/" + id)
    }


    public orderChart(body) {
        let token = this._cookieService.get('token')
        let headers = new HttpHeaders({
            'Content-type': 'application/json',
            'token': token,
        })
        return this._httpClient.post(this._baseUrl + "client/order/chart", body, { headers })
    }

    public getReview(companyId: number, goodId: number, page: number, limit: number) {
        let token = this._cookieService.get('token')
        let headers = new HttpHeaders({
            'Content-type': 'application/json',
            'token': token,
        });
        return this._httpClient.get(this._baseUrl + "freeclient/reviews/" + companyId + "/" + goodId + "?page=" + page + "&limit=" + limit)
    }

}
