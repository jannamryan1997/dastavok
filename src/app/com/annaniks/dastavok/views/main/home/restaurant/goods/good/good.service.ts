import { Injectable, Inject } from "@angular/core"
import { HttpClient } from "@angular/common/http";
@Injectable()

export class GoodService {

    constructor(@Inject('BASE_URL') private _baseUrl, private _httpClient: HttpClient) { }

    getGood(id) {
        return this._httpClient.get(this._baseUrl + "freeclient/good/" + id)
    }

}