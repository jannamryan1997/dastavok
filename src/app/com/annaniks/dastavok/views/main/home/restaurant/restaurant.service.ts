import { Injectable, Inject } from "@angular/core"
import { HttpClient } from "@angular/common/http";


@Injectable()
export class RestaurantService {

    constructor(@Inject('BASE_URL') private _baseUrl, private _httpClient: HttpClient) { }


    public getRestaurtants(page: number, limit: number) {
        return this._httpClient.get(this._baseUrl + "freeclient/restaurants?page=" + page + "&limit=" + limit)
    }

    public getGoodTypes(companyId: number) {
        return this._httpClient.get(this._baseUrl + 'freeclient/goodtypes/' + companyId)
    }

    public getGoods(companyId: number, goodTypeId: number, page: number, limit: number) {
        return this._httpClient.get(this._baseUrl + "freeclient/goods/" + companyId + "/" + goodTypeId + "?page=" + page + "&limit=" + limit)
    }

    public getRestaurantById(id) {
        return this._httpClient.get(this._baseUrl + "freeclient/restaurant/" + id)
    }

}