import { NgModule } from "@angular/core"
import { MainRoutingModule } from "./main.routing.module";
import { MainComponent } from "./main.view";
import { SharedModule } from "../../shared/shared.module";
import { MenuItemsService } from "../../services";
import { FooterComponent } from "../../components/footer/footer.component";
import { LoginModal, VerificationModal,PhoneNumberModal,SignUpModal,NewPasswordModals} from "../../modals";
import { SignUpService } from "../../services/signUp.service";
import {HttpClientModule} from "@angular/common/http"
import { CookieService } from 'angular2-cookie/services/cookies.service';


@NgModule({

    declarations: [MainComponent, FooterComponent, VerificationModal, LoginModal,PhoneNumberModal,SignUpModal,NewPasswordModals],
    imports: [MainRoutingModule, SharedModule,HttpClientModule],
    providers: [MenuItemsService,SignUpService,CookieService],
    entryComponents: [VerificationModal, LoginModal,PhoneNumberModal,SignUpModal,NewPasswordModals],
    exports: [],
})

export class MainModule { }