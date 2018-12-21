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
    private _companyId: number;
    private _goodTypeId: number;
    public pageLength: number = 10;
    public goodsInfo: Array<Good> = [];
    public count: number;
    public goodsImage: string;
    public loading:boolean=false;

    constructor(private activatedRoute: ActivatedRoute, private _restaurantService: RestaurantService) {
        this.activatedRoute.params.subscribe((params) => {
            this._companyId = params.companyId;
            this._goodTypeId = params.goodTypeId;

        })
    }
    ngOnInit() {
        this._getGoods(this._companyId, this._goodTypeId, 1, this.pageLength);
    }

    private _getGoods(companyId: number, goodTypeId: number, page, count): void {
        this.loading=true;
        this._restaurantService.getGoods(companyId, goodTypeId, page, count)
            .subscribe((data: ServerResponse<Paginator<Array<Good>>>) => {
                this.loading=false;
                this.goodsInfo = data.data.data;
                this.count = data.data.metaData.count;
            })



    }

    paginate($event) {
        this._getGoods(this._companyId, this._goodTypeId, $event.pageNumber, this.pageLength);
    }
}