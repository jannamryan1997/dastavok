import { Component, Input, OnInit } from "@angular/core"
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

    ngOnInit() {
        console.log(this.goodInfo);

        if (this.goodsImage != null) {
            let images = this.goodsImage.split(",")
            this.goodsImageItem = images[0];
        }

    }

    constructor(private router: Router, private _activetedRoute: ActivatedRoute) { }

    navToDetails(): void {
            this.router.navigate([`/home/restaurant/${this.goodInfo.companyId}/${this.goodInfo.goodTypeId}/${this.goodInfo.id}`])
    
    }

}