import { Component, Input, OnInit, Inject } from "@angular/core"
import { Good } from "../../../models/models";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
    selector: "app-goods-list-item",
    templateUrl: "goods-list-item.component.html",
    styleUrls: ["goods-list-item.component.scss"]
})

export class GoodsListItemComponent implements OnInit {
    @Input() goodInfo: Good;
    @Input() goodsImage: string;

    public goodsImageItem;

    constructor(@Inject("BASE_URL") public baseUrl: string) { }


    ngOnInit() {
        if (this.goodsImage != null) {
            let images = this.goodsImage.split(",")
            this.goodsImageItem = images[0];
        }

    }
}