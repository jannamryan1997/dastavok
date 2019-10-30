import { Injectable, Inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()

export class SearchService {

    constructor(private _httpClient: HttpClient) { }


    public getSearchGoods(page: number, limit: number, text: string) {
        return this._httpClient.get("freeclient/goods?page=" + page + "&limit=" + limit + "&text=" + text)
    }
}