import { Component } from "@angular/core"
import { MatDialog } from "@angular/material";
import { SignUpModal } from "../../modals";


@Component({
    selector: "app-main",
    templateUrl: "main.view.html",
    styleUrls: ["main.view.scss"]
})

export class MainComponent {
    constructor(private _dialog: MatDialog) {
        this._dialog.open(SignUpModal, {
            width: "685px",
            height: "686px",
        })
    }

}