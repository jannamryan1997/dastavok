import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()

export class SearchService {

    constructor(private _httpClient: HttpClient) { }

    public getSearchGoods(page: number, companyId: string, limit: number, text: string) {
        return this._httpClient.post(`freeclient/goods/${companyId}?page=${page}&limit=${limit}`, { name: text })
    }
}