import { Component, Input, OnInit } from "@angular/core"
import { Good } from "../../../models/models";

@Component({
    selector: "app-goods-list-item",
    templateUrl: "goods-list-item.component.html",
    styleUrls: ["goods-list-item.component.scss"]
})

export class GoodsListItemComponent implements OnInit {
    @Input() goodInfo: Array<Good>;
    @Input() goodsImage: string;
    public goodsImageItem;
    
    ngOnInit() {
        if (this.goodsImage != null) {
            let images = this.goodsImage.split(",")
            this.goodsImageItem = images[0];
        }

    }
}