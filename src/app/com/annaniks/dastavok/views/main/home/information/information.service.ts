import { Injectable, Inject } from "@angular/core"
import { HttpClient } from "@angular/common/http";



@Injectable()

export class InformationService {

  constructor(@Inject('BASE_URL') private BASEURL, private _httpClient: HttpClient) { }



  public getFreeclientRestaurant(page: number, limit: number) {
    return this._httpClient.get(this.BASEURL + "freeclient/restaurants?page=" + page + "&limit=" + limit)
  }

  public getSearchGoods(page: number, limit: number,text:string) {
    return this._httpClient.get(this.BASEURL + "freeclient/goods?page=" + page + "&limit=" + limit + "&text="+text)
  }

}
