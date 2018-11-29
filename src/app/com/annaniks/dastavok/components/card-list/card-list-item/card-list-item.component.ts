import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core"
import { ServerResponse, Card } from "../../../models/models";
import { CardService } from "../../../views/main/home/card/card.service";




@Component({
    selector: "app-card-list-item",
    templateUrl: "card-list-item.component.html",
    styleUrls: ["card-list-item.component.scss"]
})

export class CardListItemComponent implements OnInit {
    @Input() cardInfo: Card = {} as Card;
    @Input() cardInfoOrderGoodId: number;
    @Input() cardGoodsInfo: ServerResponse<Card>;
    @Input() cardGoodsImageItem: string;
    @Output() deleted: EventEmitter<boolean> = new EventEmitter()
    public image: Array<string>;
    public itemImage: string;

    constructor(private _cardService: CardService) { }

    ngOnInit() {
        if (this.cardGoodsImageItem != null) {
            this.image = this.cardGoodsImageItem.split(",")
            for (var i = 0; i < this.image.length; i++) {
                this.itemImage = this.image[1];
            }
        }
      //  console.log(this.cardGoodsInfo);



    }

    public onClickDelete(): void {
        this._deleteOrder();
    }

    private _deleteOrder(): void {
    //    console.log(this.cardInfoOrderGoodId);

        this._cardService.deleteOrderChart(this.cardInfo.orderId, this.cardInfoOrderGoodId)
            .subscribe((data) => {
                this._deletecardGoodItems();
                console.log(data);

            })

    }

    private _deletecardGoodItems() {
        this.deleted.emit(true);
    }

}