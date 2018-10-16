import { Component, OnInit } from "@angular/core"
import { MenuItemsService } from "../../services";
import { MatDialog, MatDialogRef } from "@angular/material";
import { LoginModal } from "../../modals";

@Component({
    selector: 'app-topbar',
    templateUrl: "topbar.component.html",
    styleUrls: ["topbar.component.scss"]
})

export class TopbarComponent implements OnInit {
    constructor(public menuItemsService: MenuItemsService, private dialog: MatDialog) { }

    ngOnInit() {

    }

    openDialogLogin(): void {
        const dialogRef = this.dialog.open(LoginModal, {
            width: "686px",
            height: "444px"
        })

    }
}