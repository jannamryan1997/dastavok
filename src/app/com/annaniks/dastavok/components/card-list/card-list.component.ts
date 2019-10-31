import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core"
import { Card, OrderInfo } from "../../models/models";
import { Router } from "@angular/router";
import { BasketService } from "../../views/main/home/basket/basket.service";

@Component({
    selector: "app-card-list",
    templateUrl: 'card-list.component.html',
    styleUrls: ["card-list.component.scss"]
})

export class CardListComponent implements OnInit {
    @Input() cardInfo: Card = {} as Card;
    @Output() deleted: EventEmitter<boolean> = new EventEmitter();
    public orderGoodId;

    constructor(private _router: Router, private _basketService: BasketService) { }

    ngOnInit() {
        for (var i = 0; i < this.cardInfo.goods.length; i++) {
            this.orderGoodId = (this.cardInfo.goods[i].orderGoodId)

        }

    }

    public navToPayment() {
        let queryParams: OrderInfo = {
            orderType: 'basket',
            orders: [this.cardInfo.orderId]
        }
        this._router.navigate(['/payment'], {
            queryParams:
                { order: JSON.stringify(queryParams) }
        })
    }

    public onClickDelete(): void {
        //  this._deleteOrder();
    }

    /* private _deleteOrder(): void {
         this._cardService.deleteOrderChart(this.cardInfo.orderId,this.orderGoodId).subscribe((data) => {
             (data);
 
         })
 
     }*/
    public deleteAllOrderChart() {
        this._basketService.deleteItemOrderChart(this.cardInfo.orderId)
            .subscribe((data) => {
                this._deleteChartGood()
            })
    }

    private _deleteChartGood() {
        this.deleted.emit(true)
    }

}