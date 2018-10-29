import {Component, Input} from "@angular/core"

@Component({
    selector:"app-goods-list-item",
    templateUrl:"goods-list-item.component.html",
    styleUrls:["goods-list-item.component.scss"]
})

export class GoodsListItemComponent{
    @Input() goodInfo={};
}