import { Component, OnInit, Input } from "@angular/core"
import { Card, OrderInfo } from "../../models/models";
import { PaymentService } from "../../views/main/payment/payment.service";
import { Router } from "@angular/router";


@Component({
    selector: "app-card-list",
    templateUrl: 'card-list.component.html',
    styleUrls: ["card-list.component.scss"]
})

export class CardListComponent implements OnInit {
    @Input() cardInfo: Card = {} as Card;


    constructor(private _router: Router) { }

    ngOnInit() { }

    public navToPayment() {
        let queryParams: OrderInfo = {
            orderType: 'basket',
            orders: [this.cardInfo.orderId]
        }
        this._router.navigate(['/payment'], { queryParams:
            {order:JSON.stringify(queryParams)}
    })

    }
}