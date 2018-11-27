import { Component, OnInit, Input } from "@angular/core"
import { ServerResponse, Card } from "../../../models/models";



@Component({
    selector: "app-card-list-item",
    templateUrl: "card-list-item.component.html",
    styleUrls: ["card-list-item.component.scss"]
})

export class CardListItemComponent implements OnInit {
    @Input() cardGoodsInfo:ServerResponse<Card>;
    @Input() cardGoodsImageItem: string;
    public image: Array<string>;
    public itemImage:string;
    constructor() { }

    ngOnInit() {
        if (this.cardGoodsImageItem != null) {
            this.image = this.cardGoodsImageItem.split(",")
            for (var i = 0; i < this.image.length; i++) {
                this.itemImage = this.image[1];
            }
        }


    }

}