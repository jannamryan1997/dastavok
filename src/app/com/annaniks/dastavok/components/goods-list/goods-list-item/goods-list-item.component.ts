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

    constructor(@Inject("FILE_URL") public fileUrl: string) { }


    ngOnInit() {
            this.goodsImageItem = this.goodInfo.thumbnail;

    }
}