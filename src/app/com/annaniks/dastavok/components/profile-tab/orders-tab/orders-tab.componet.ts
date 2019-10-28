import { Component, Input, OnInit } from "@angular/core"
import { OrderHistory, ServerResponse } from "../../../models/models";
import { ProfileService } from "../../../views/main/profile/profile.service";

@Component({
    selector: "app-orders-tab",
    templateUrl: "orders-tab.component.html",
    styleUrls: ["orders-tab.component.scss"]
})

export class OrdersTabComponent implements OnInit {

    public orderInfoImage: string;
    public isEmpty: boolean;
    public orderInfo: OrderHistory[];

    constructor(private _profileService: ProfileService) { }

    ngOnInit() {
        this._clientOrderHistory();
    }

    private _clientOrderHistory() {
        this._profileService.clientOrderDriver()
            .subscribe((data: ServerResponse<OrderHistory[]>) => {
                this.orderInfo = data.data;
                if (this.orderInfo && this.orderInfo.length == 0) {
                    this.isEmpty = true;
                }
                else {
                    this.isEmpty = false;
                }

            })
    }
}