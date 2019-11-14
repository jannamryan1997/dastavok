import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MainService {

    constructor(private _httpClient: HttpClient) { }

    public searchFilters(query: string) {
        return this._httpClient.get('');
    }
}