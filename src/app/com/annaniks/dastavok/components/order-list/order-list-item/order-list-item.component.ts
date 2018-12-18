import { Component, OnInit, Input } from "@angular/core"
import { OrderHistory } from "../../../models/models";

@Component({
    selector: "app-order-list-item",
    templateUrl: "order-list-item.component.html",
    styleUrls: ["order-list-item.component.scss"]
})

export class OrderListItemComponent implements OnInit {

    public empty: boolean;
    @Input() orderInfo: OrderHistory;
    @Input() loading: boolean;

    constructor() { }

    ngOnInit() {
console.log(this.orderInfo,"iii");

    }

}