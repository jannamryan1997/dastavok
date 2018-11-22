import { Component, Input, OnInit } from "@angular/core"

@Component({
    selector: "app-goods-list-item",
    templateUrl: "goods-list-item.component.html",
    styleUrls: ["goods-list-item.component.scss"]
})

export class GoodsListItemComponent implements OnInit {
    @Input() goodInfo = {};
    @Input() goodsImage: string;
public goodsImageItem;
    ngOnInit() {


    }
}