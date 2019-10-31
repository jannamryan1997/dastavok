import { Component, OnInit } from "@angular/core"
import { BasketService } from "./basket.service";
import { Card, OrderInfo } from "src/app/com/annaniks/dastavok/models/models";
import { Router } from "@angular/router";

@Component({
    selector: "app-basket",
    templateUrl: "basket.view.html",
    styleUrls: ["basket.view.scss"]
})

export class BasketView implements OnInit {
    public loading: boolean = false;
    public cardInfo: Card[] = [];
    public cardGoodsInfo: Array<any>;
    public cardGoodsImage: string;
    public cardGoodImageItem: string;
    public totalSum: number = 0;
    public amount: number = 0;

    constructor(private _basketService: BasketService, private _router: Router) { }

    ngOnInit() {
        this._getOrderChard();
    }

    private _getOrderChard() {
        this.loading = true;
        this._basketService.getOrderChart()
            .subscribe((data: any) => {
                this.loading = false;
                this.totalSum = 0;
                if (data && data.data && data.data.data) {
                    this.cardInfo = data.data.data;
                    for (var i = 0; i < this.cardInfo.length; i++) {
                        this.totalSum = this.totalSum + this.cardInfo[i].totalAmount;
                    }
                }
            })
    }

    public byAllEvent(event): void {
        let ordersId: Array<number> = [];
        for (var i = 0; i < this.cardInfo.length; i++) {
            ordersId.push(this.cardInfo[i].orderId)
        }
        let queryParams: OrderInfo = {
            orderType: 'basket',
            orders: ordersId
        }
        this._router.navigate(['/payment'], {
            queryParams: {
                order: JSON.stringify(queryParams)
            }
        })
    }

    deletedOrder(event) {
        this._getOrderChard()
    }

}