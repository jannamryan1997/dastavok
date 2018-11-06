import { Component, OnInit } from "@angular/core"
import { ActivatedRoute } from "@angular/router";
import { RestaurantService } from "../restaurant.service";
import { Good, ServerResponse, Paginator } from "src/app/com/annaniks/dastavok/models/models";

@Component({
    selector: "app-goods",
    templateUrl: "goods.view.html",
    styleUrls: ["goods.view.scss"]
})

export class GoodsView implements OnInit {
    public goods: Array<Good> = [];

    constructor(private activatedRoute: ActivatedRoute, private _restaurantService: RestaurantService) {
        this.activatedRoute.params.subscribe((params) => {
            console.log(params);

        })
    }
    ngOnInit() {
        this._getGoods();
    }

    private _getGoods(): void {
        this._restaurantService.getGoods(2, 2, 1, 10)
            .subscribe((data: ServerResponse<Paginator<Array<Good>>>) => {
                this.goods = data.data.data;
            })

    }
}