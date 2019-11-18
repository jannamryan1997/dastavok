import { Component, Input, EventEmitter, OnInit, Output } from "@angular/core"
import { SignUpService } from "../../../services/signUp.service";
import { User } from "../../../models/models";
import { AddressEditModal } from "../../../modals";
import { MatDialog } from "@angular/material"
@Component({
    selector: "app-payment-tab",
    templateUrl: "payment-tab.component.html",
    styleUrls: ["payment-tab.component.scss"]
})

export class PaymentTabComponent implements OnInit {

    public cardPayment: boolean = true;
    @Input() address: string;
    public userData: User = new User();


    public cardItem: Array<object> = [
        { image: "assets/images/mastercard.png" },
        { image: "assets/images/Visa.svg.png" },
        { image: "assets/images/maestro.png" },
        { image: "assets/images/jcb.png" }
    ]

    @Input() paymentTab: number;
    @Output() changeTab: EventEmitter<number> = new EventEmitter;

    constructor(private _signUpService: SignUpService, private _matDialog: MatDialog) { }


    ngOnInit() {
        this.userData = this._signUpService.userInfo;
        (this.userData);


    }



    public openAddressModal(userData): void {

        const dialogRef = this._matDialog.open(AddressEditModal, {
            width: "650px",
            height: "444px",
            panelClass: ['no-padding'],
            data: {
                userData: userData,
            }
        });
        dialogRef.afterClosed().subscribe((data) => {
            this._signUpService.getUserInfo().subscribe((data) => {
                this.userData = data.data;            
            });
        })
    }

    public openDone() {
        this.changeTab.emit(this.paymentTab)
    }

    public closePayment() {
        this.cardPayment = false;

    }
    public showPayment() {
        this.cardPayment = true;

    }


}