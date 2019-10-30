import { Component, OnInit, Input } from "@angular/core"
import { UserUpdateModal } from "../../../modals/user-update/user-update.modal";
import { MatDialog } from "@angular/material"
import { ProfileService } from "./profile.service";
import { ServerResponse, User, OrderHistory } from "../../../models/models";
import { NewPhoneNumber } from "../../../modals";
import { SignUpService } from "../../../services/signUp.service";


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
    public notifications: Array<object> = [];
    public clientImage: string = "/assets/images/userimages.png";

     public clientId:number;


    constructor(private dialog: MatDialog, private _profileService: ProfileService,private _signUpService:SignUpService) { }

    ngOnInit() {
        this._clientGet();
        this._clientOrdersProcessing();
    }


    public openUserUpdateModal(clientData): void {
        const dialogref = this.dialog.open(UserUpdateModal, {
            width: "686px",
            panelClass: ['margin-10'],
            data:{
                clientData:clientData,
            }
        });
        dialogref.afterClosed().subscribe((data) => {
            this._clientGet();
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
        this._signUpService.getUserInfo()
            .subscribe((data: ServerResponse<User>) => {
                this.clientData = data.data;
                this.clientId=data.data.id;
                if (data.data.image !== null) {
                    this.clientImage = data.data.image;
                }

                (data);
              //  (this.clientId);
                
            })


    }

    private _clientOrdersProcessing() {
        this._profileService.clientOrderProcessing()
            .subscribe((data) => {
                (data);

            })
    }

    public openNewPhoneNumberModal(){
        const dialogref=this.dialog.open(NewPhoneNumber,{
            width: "686px",
            height:"444px",
        })

    }


}