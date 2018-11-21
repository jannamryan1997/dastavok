import { Component, OnInit } from "@angular/core"
import { ActivatedRoute, Router } from "@angular/router";
import { RestaurantService } from "./restaurant.service";
import { ServerResponse, GoodType, Restaurant } from "../../../../models/models";

@Component({
    selector: "app-restaurant",
    templateUrl: "restaurant.view.html",
    styleUrls: ["restaurant.view.scss"]
})

export class RestaurantView implements OnInit {
    public starCount: number = 4;
    public goodTypes: Array<GoodType> = [];
    public companyId: number;
    public restaurant: Restaurant;

    constructor(private _router: Router, private _activatedRoute: ActivatedRoute, private _restaurantService: RestaurantService) {
        this._activatedRoute.params.subscribe((params) => {
            this.companyId = params.companyId;
        })
    }

    ngOnInit() {
        this._getGoodTypes(this.companyId);
        this._getRestaurant();

    }

    private _getGoodTypes(companyId: number): void {
        this._restaurantService.getGoodTypes(companyId)
        .subscribe((data: ServerResponse<Array<GoodType>>) => {
            this.goodTypes = data.data;
            console.log(data);
            
        })
    }

    public onClickItem(goodType: GoodType) {
        this._router.navigate([goodType.id], { relativeTo: this._activatedRoute })
    }

    private _getRestaurant() {
        this._restaurantService.getRestaurantById(this.companyId)
            .subscribe((data: ServerResponse<Restaurant>) => {
                this.restaurant = data.data;
                console.log(data);

            })
    }



}
