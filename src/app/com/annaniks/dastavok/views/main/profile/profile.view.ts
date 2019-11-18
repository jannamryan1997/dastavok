import { Component, OnInit, Input, OnDestroy } from "@angular/core"
import { UserUpdateModal } from "../../../modals/user-update/user-update.modal";
import { MatDialog } from "@angular/material"
import { ProfileService } from "./profile.service";
import { ServerResponse, User, OrderHistory } from "../../../models/models";
import { NewPhoneNumber } from "../../../modals";
import { SignUpService } from "../../../services/signUp.service";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";


@Component({
    selector: "app-profile",
    templateUrl: "profile.view.html",
    styleUrls: ["profile.view.scss"]
})

export class ProfileView implements OnInit, OnDestroy {
    public orderInfo: OrderHistory;
    public tab: number = 1;
    public clientData: User;
    public page = 1;
    public pageLength = 10;
    public count: number = 0;
    public notifications: Array<object> = [];
    public clientImage: string;
    public clientId: number;
    private _unsubscribe$: Subject<void> = new Subject<void>();

    constructor(
        private dialog: MatDialog,
        private _profileService: ProfileService,
        private _signUpService: SignUpService
    ) { }

    ngOnInit() {
        this._clientGet();
        this._clientOrdersProcessing();
    }


    public openUserUpdateModal(clientData): void {
        const dialogref = this.dialog.open(UserUpdateModal, {
            width: "686px",
            panelClass: ['margin-10'],
            data: {
                clientData: clientData,
            }
        });
        dialogref.afterClosed().subscribe(() => {
            this._clientGet();
        })

    }
    public changeTab(tab: number): void {
        this.tab = tab;
    }

    private _clientGet() {
        this._signUpService.getUserInfo()
            .pipe(
                takeUntil(this._unsubscribe$)
            )
            .subscribe((data: ServerResponse<User>) => {
                this.clientData = data.data;
                this.clientId = data.data.id;
                this.clientImage = data.data.image;
            })
    }

    private _clientOrdersProcessing(): void {
        this._profileService.clientOrderProcessing()
            .pipe(takeUntil(this._unsubscribe$))
            .subscribe((data) => { })
    }

    public openNewPhoneNumberModal() {
        const dialogref = this.dialog.open(NewPhoneNumber, {
            width: "686px",
            height: "444px",
        })

    }

    ngOnDestroy() {
        this._unsubscribe$.next();
        this._unsubscribe$.complete();
    }


}