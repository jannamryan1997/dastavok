import { Component, OnInit } from "@angular/core"
import { MatDialog } from '@angular/material';

@Component({
    selector: "app-newPassword",
    templateUrl: "new-password.modal.html",
    styleUrls: ["new-password.modal.scss"],
})

export class NewPasswordModals implements OnInit {

    constructor(public dialog: MatDialog) { }

    ngOnInit() { }

    
}