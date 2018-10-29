import { Component, OnInit } from "@angular/core"
import { UserUpdateModal } from "../../../modals/user-update/user-update.modal";
import { MatDialog } from "@angular/material"

@Component({
    selector: "app-profile",
    templateUrl: "profile.view.html",
    styleUrls: ["profile.view.scss"]
})

export class ProfileView implements OnInit {
 
    public tab:number=1;

    public items_notification: Array<object> = [
        {
            label: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam provident atquedeleniti adipisci quam fugiat eveniet, debitis dolores laudantium delectus beatae earum dictainventore, illum laboriosam quaerat molestias reprehenderit assumenda ? ",
            data: "17/08/18",
        },
        {
            label: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam provident atquedeleniti adipisci quam fugiat eveniet, debitis dolores laudantium delectus beatae earum dictainventore, illum laboriosam quaerat molestias reprehenderit assumenda ? ",
            data: "17/08/18",
        },
        {
            label: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam provident atquedeleniti adipisci quam fugiat eveniet, debitis dolores laudantium delectus beatae earum dictainventore, illum laboriosam quaerat molestias reprehenderit assumenda ? ",
            data: "17/08/18",
        }
    ]


    constructor(private dialog: MatDialog) { }

    ngOnInit() {

    }

    public openUserUpdateModal(): void {
        const dialogref = this.dialog.open(UserUpdateModal, {
            width: "686px",
            height: " 579px",
            panelClass: ['no-padding'],
        })
    }
public showNotification(){
    this.tab=1;

}
public showOrderHistory(){
    this.tab=2;
}

}