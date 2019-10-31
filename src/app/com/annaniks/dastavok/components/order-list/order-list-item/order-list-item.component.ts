import { Component, OnInit, Input, Inject } from "@angular/core"
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

    constructor(@Inject("FILE_URL") public fileUrl: string) { }

    ngOnInit() {

    }

}