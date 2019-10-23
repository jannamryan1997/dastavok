import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProductsService {

    constructor(private _httpClient: HttpClient) {}

    public getGoods(companyId: number, goodTypeId: number, page: number, limit: number) {
        return this._httpClient.get("freeclient/goods/" + companyId + "/" + goodTypeId + "?page=" + page + "&limit=" + limit);
    }
}