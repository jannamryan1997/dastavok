import { Component, OnInit } from "@angular/core"
import { Router } from "@angular/router";
import { RestaurantService } from "./restaurant.service";
import { ServerResponse, GoodType } from "../../../../models/models";

@Component({
    selector: "app-restaurant",
    templateUrl: "restaurant.view.html",
    styleUrls: ["restaurant.view.scss"]
})

export class RestaurantView implements OnInit {
    public goodTypes: Array<GoodType> = [];
    public restrantItem: Array<any> = [
        {},
        {},
        {},
        {}
    ]
    constructor(private router: Router, private _restaurantService: RestaurantService) {
    }

    ngOnInit() {
        this._getRestaurtants();
        this._getGoodTypes();

    }

    private _getRestaurtants(): void {
        this._restaurantService.getRestaurtants(1, 10).subscribe((data) => {
            console.log(data);

        })
    }

    private _getGoodTypes(): void {
        this._restaurantService.getGoodTypes(2).subscribe((data: ServerResponse<Array<GoodType>>) => {

            this.goodTypes = data.data;
            console.log(this.goodTypes);

        })
    }

    public onClickItem(goodType: GoodType) {
        console.log(goodType);

    }



}
