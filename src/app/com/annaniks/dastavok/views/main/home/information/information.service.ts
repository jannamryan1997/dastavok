import {Injectable, Inject} from "@angular/core"
import { HttpClient } from "@angular/common/http";


@Injectable()

export class InformationService{
    
    constructor(@Inject('BASE_URL') private BASEURL,private _httpClient:HttpClient){}



getFreeclientRestaurant(page:number,limit:number){
  return  this._httpClient.get(this.BASEURL+"freeclient/restaurants?page="+page+"&limit="+limit)
}

}
