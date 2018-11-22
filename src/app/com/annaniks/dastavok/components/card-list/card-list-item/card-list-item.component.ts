import { Component, OnInit, Input } from "@angular/core"


@Component({
    selector: "app-card-list-item",
    templateUrl: "card-list-item.component.html",
    styleUrls: ["card-list-item.component.scss"]
})

export class CardListItemComponent implements OnInit {

    public quarity: number = 1;
    public add: string = "+";
    public remove: string = "-";
    @Input() cardGoodsInfo = {};
    @Input() cardGoodsImageItem: string;
    public image: Array<string>;
    itemInage;
    constructor() { }

    ngOnInit() {
        if (this.cardGoodsImageItem != null) {
            this.image = this.cardGoodsImageItem.split(",")
            for (var i = 0; i < this.image.length; i++) {
                this.itemInage = this.image[1];
            }
        }

    }

    public removeQuarity() {

        if (this.quarity == 1) {
            return;


        }
        this.quarity--;
    }

    public addQuarity() {
        this.quarity++;
    }


}