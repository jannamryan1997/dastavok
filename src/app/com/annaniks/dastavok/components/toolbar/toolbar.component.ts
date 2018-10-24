import { Component, OnInit } from "@angular/core"
import { MatDialog } from "@angular/material";
import { LoginModal, PhoneNumberModal } from "../../modals";
import { SignUpService } from "../../services/signUp.service";

@Component({
    selector: "app-toolbar",
    templateUrl: "toolbar.component.html",
    styleUrls: ["toolbar.component.scss"]
})

export class ToolbarComponent implements OnInit {
      
    public showlogin: boolean = false;
    public showUserProfileDisplay:boolean=false;

    constructor(private dialog: MatDialog,public signUpService:SignUpService) { }

    ngOnInit() {

    }

    public showLoginSignup() {
        setTimeout(() => {
            this.showlogin =  !this.showlogin ;
        },1)

    }


    public openLoginModal(): void {
        const dialogRef = this.dialog.open(LoginModal, {
            width: "686px",
            height: "444px",
            panelClass: ['no-padding']
        })
    }

    public openPhoneNumberModal(): void {
        const dialogRef = this.dialog.open(PhoneNumberModal, {
            width: "686px",
            height: "444px",
            panelClass: ['no-padding'],
            data:{
                key:'registration'
            }
        })
    }

    public onClickedOutside(e: Event) {
        this.showlogin = false;
    }

    public showUserProfile(){
        setTimeout(()=>{
            this.showUserProfileDisplay=true;
        },1)

    }


  public  onClickedOutsideShowUserProfile(){
    this.showUserProfileDisplay=false;
    }

}