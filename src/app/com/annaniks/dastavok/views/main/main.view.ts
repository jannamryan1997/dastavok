import {Component} from "@angular/core"
import { MatDialog } from "@angular/material";
import { UserUpdateModal } from "../../modals";

@Component({
    selector:"app-main",
    templateUrl:"main.view.html",
    styleUrls:["main.view.scss"]
})

export class MainComponent{
    constructor(private _dialogref: MatDialog) {
        this._dialogref.open(UserUpdateModal, {
            width: "686px",
            height: "686px"
        })
    }

}