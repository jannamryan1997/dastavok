import { Component, OnInit, Input, Output, EventEmitter, Inject } from "@angular/core"
import { Card, CardGoods } from "../../../models/models";
import { BasketService } from "../../../views/main/home/basket/basket.service";

@Component({
    selector: "app-card-list-item",
    templateUrl: "card-list-item.component.html",
    styleUrls: ["card-list-item.component.scss"]
})

export class CardListItemComponent implements OnInit {
    @Input() cardInfo: Card = {} as Card;
    @Input() cardInfoOrderGoodId: number;
    @Input() cardGoodsInfo: CardGoods;
    @Input() cardGoodsImageItem: string;
    @Output() deleted: EventEmitter<boolean> = new EventEmitter()
    public image: Array<string>;
    public itemImage: string;
    public productLink: string;

    constructor(@Inject("FILE_URL") public fileUrl: string, private _basketService: BasketService) { }

    ngOnInit() {
        this.productLink = `/${this.cardGoodsInfo.goodTypeId}/products/${this.cardGoodsInfo.goodId}`;
        if (this.cardGoodsImageItem != null) {
            this.image = this.cardGoodsImageItem.split(",")
            this.itemImage = this.cardGoodsInfo.thumbnail;
        }
    }

    public onClickDelete(): void {
        this._deleteOrder();
    }

    private _deleteOrder(): void {
        this._basketService.deleteOrderChart(this.cardInfo.orderId, this.cardInfoOrderGoodId)
            .subscribe((data) => {
                this._deletecardGoodItems();
            })

    }

    public countDecrement(): void {
        if (this.cardGoodsInfo.count == 1) {
            return;
        }
        this.cardGoodsInfo.count--;
    }

    public countIncrement(): void {
        this.cardGoodsInfo.count++;
    }

    private _deletecardGoodItems() {
        this.deleted.emit(true);
    }

}