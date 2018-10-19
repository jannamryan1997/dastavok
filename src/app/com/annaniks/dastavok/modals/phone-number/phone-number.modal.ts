import { Component, OnInit } from "@angular/core";
import {MatDialog,MatDialogRef} from "@angular/material";
import {FormGroup,FormBuilder,Validators} from "@angular/forms"
import { VerificationModal } from "..";
@Component({
    selector: "app-phonenumber",
    templateUrl: "phone-number.modal.html",
    styleUrls: ["phone-number.modal.scss"]
})

export class PhoneNumberModal implements OnInit {

public phoneNumberForm:FormGroup;

    constructor(private dialogRef:MatDialogRef<PhoneNumberModal>,public dialog: MatDialog) { }

    ngOnInit() {
        this._formBuilder();
     }

     private _formBuilder(){
this.phoneNumberForm=new FormBuilder().group({
    "phonenumber":["",Validators.required]
})
     }

    public closePhoneModal(){
        this.dialogRef.close();
    }

    public openVerificationModal():void{
        const dialogRef=this.dialog.open(VerificationModal,{
            width: "686px",
            height: "444px",
            panelClass: ['no-padding']
        })
    }

}