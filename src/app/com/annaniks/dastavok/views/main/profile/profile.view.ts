import { Component, OnInit } from "@angular/core"
import { UserUpdateModal } from "../../../modals/user-update/user-update.modal";
import { MatDialog } from "@angular/material"
import { ProfileService } from "./profile.service";
import { ServerResponse, User, OrderHistory } from "../../../models/models";


@Component({
    selector: "app-profile",
    templateUrl: "profile.view.html",
    styleUrls: ["profile.view.scss"]
})

export class ProfileView implements OnInit {

    public orderInfo: OrderHistory;
    public tab: number = 1;
    public clientData: User;
    public page = 1;
    public pageLength = 10;
    public count: number = 0;
    public notifications: Array<object> = []


    constructor(private dialog: MatDialog, private _profileService: ProfileService) { }

    ngOnInit() {
        this._clientGet();
        this._clientOrdersProcessing();
    }


    public openUserUpdateModal(): void {
        const dialogref = this.dialog.open(UserUpdateModal, {
            width: "686px",
            panelClass: ['margin-10']
        })
    }
    public showNotification() {
        this.tab = 1;

    }
    public showOrderHistory() {
        this.tab = 2;
    }
    public showTrackDelivery() {
        this.tab = 3;
    }


    private _clientGet() {
        this._profileService.getClient()
            .subscribe((data: ServerResponse<User>) => {
                this.clientData = data.data;
            })
    }

    private _clientOrdersProcessing() {
        this._profileService.clientOrderProcessing()
            .subscribe((data) => {
                console.log(data);

            })
    }


}