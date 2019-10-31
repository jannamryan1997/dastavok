import { Component, OnInit } from "@angular/core"
import { ProfileService } from "../../../views/main/profile/profile.service";
import { ServerResponse, Paginator } from "../../../models/models";

@Component({
    selector: "app-notification-tab",
    templateUrl: "notification-tab.component.html",
    styleUrls: ["notification-tab.component.scss"]
})
export class NotificationTabComponent implements OnInit {

    public page: number = 1;
    public pageLength: number = 10;
    public count: number;
    public isEmpty: boolean;
    public notifications: Array<object> = [];

    constructor(private _profileService: ProfileService) { }

    ngOnInit() {
        this._getProfileNotifcation();
    }

    public paginate(event) {
        this._getProfileNotifcation();
    }


    private _getProfileNotifcation() {
        this._profileService.getNatifocation(this.page, this.pageLength)
            .subscribe((data: ServerResponse<Paginator<any>>) => {
                this.notifications = data.data.data;
                (this.notifications,"natification",data)
                this.count = data.data.metaData.count;
                if (this.notifications == []) {
                    this.isEmpty = true;
                }
                else {
                    this.isEmpty = false;
                }

            })
    }
}