import { Component, OnInit, Input, Output,EventEmitter } from "@angular/core"
import { Card, OrderInfo, ServerResponse } from "../../models/models";
import { Router } from "@angular/router";
import { CardService } from "../../views/main/home/card/card.service";



@Component({
    selector: "app-card-list",
    templateUrl: 'card-list.component.html',
    styleUrls: ["card-list.component.scss"]
})

export class CardListComponent implements OnInit {
    @Input() cardInfo: Card = {} as Card;
    @Output() deleted:EventEmitter<boolean>=new EventEmitter();
    public orderGoodId;

    constructor(private _router: Router, private _cardService: CardService) { }

    ngOnInit() {
        for (var i = 0; i < this.cardInfo.goods.length; i++) {
            this.orderGoodId=(this.cardInfo.goods[i].orderGoodId)

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
            console.log(data);

        })

    }*/
    public deleteAllOrderChart(){
       this._cardService.deleteItemOrderChart(this.cardInfo.orderId)
        .subscribe((data)=>{
        this._deleteChartGood()
            console.log(data);
            
        })
    }

private _deleteChartGood(){
    this.deleted.emit(true)
}

}