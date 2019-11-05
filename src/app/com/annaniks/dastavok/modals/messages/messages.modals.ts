import { Component, OnInit } from "@angular/core";
import { MatDialogRef, MatDialog } from "@angular/material";
import { RegistrationStep } from "../registration-step/registration-step.modal";


@Component({
    selector: "app-messages",
    templateUrl: "messages.modals.html",
    styleUrls: ["messages.modals.scss"]
})

export class MessagesModals implements OnInit {

    constructor(private _dialogRef: MatDialogRef<MessagesModals>) { }

    ngOnInit() { }

    public closeModal(): void {
        this._dialogRef.close(true);
    }


}