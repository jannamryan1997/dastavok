import { Component, OnInit } from "@angular/core"
import { CardService } from "./card.service";
import { ServerResponse, Card, } from "src/app/com/annaniks/dastavok/models/models";

@Component({
    selector: "app-card",
    templateUrl: "card.view.html",
    styleUrls: ["card.view.scss"]
})

export class CardView implements OnInit {

    public cardInfo: Card[];
    public cardGoodsInfo: Array<any>;
    public cardGoodsImage: string;
    public cardGoodImageItem: string;
    public totalSum: number=0;
    constructor(private _cardService: CardService) { }

    ngOnInit() {
        this._getOrderChard();
    }

    private _getOrderChard() {
        this._cardService.getOrderChart()
            .subscribe((data: ServerResponse<Card[]>) => {
                this.cardInfo = data.data;
                for (var i = 0; i < this.cardInfo.length; i++) {
                  this.totalSum=this.totalSum+this.cardInfo[i].totalAmount;
                }
                console.log(this.cardInfo);

            })
    }

}