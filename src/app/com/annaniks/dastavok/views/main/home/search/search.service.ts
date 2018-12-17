import { Injectable, Inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()

export class SearchService {

    constructor(@Inject('BASE_URL') private _BASEURL, private _httpClient: HttpClient) { }


    public getSearchGoods(page: number, limit: number, text: string) {
        return this._httpClient.get(this._BASEURL + "freeclient/goods?page=" + page + "&limit=" + limit + "&text=" + text)
    }
}