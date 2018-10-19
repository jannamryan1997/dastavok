import { Component, OnInit } from "@angular/core"
import { MatDialogRef, MatDialog } from "@angular/material";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { NewPasswordModal } from "../newPassword/newPassword.modal";




@Component({
    selector: "app-verification",
    templateUrl: "verification.modal.html",
    styleUrls: ["verification.modal.scss"]
})

export class VerificationModal implements OnInit {
    public verificationForm: FormGroup;

    constructor(private dialoRef: MatDialogRef<VerificationModal>, public dialog: MatDialog) { }

    ngOnInit() {
        this._formBuilder();
    }

    public dialogClose() {
        this.dialoRef.close();
    }

    private _formBuilder() {
        this.verificationForm = new FormBuilder().group({
            "control_1": ["1", Validators.required],
            "control_2": ["1", Validators.required],
            "control_3": ["1", Validators.required],
            "control_4": ["1", Validators.required],
        })
    }
    public closeVerification() {
        this.dialoRef.close();
    }

   public openNewPasswordModal(): void {

        const dialoRef = this.dialog.open(NewPasswordModal, {
            width: "686px",
            height: "444px",
            panelClass: ['no-padding']
        })
    }
}