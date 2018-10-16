import { NgModule } from "@angular/core"
import { MainRoutingModule } from "./main.routing.module";
import { MainComponent } from "./main.view";
import { SharedModule } from "../../shared/shared.module";
import { MenuItemsService } from "../../services";
import { FooterComponent } from "../../components/footer/footer.component";
import { LoginModal, VerificationModal,PhoneNumberModal,RegistrarionModals } from "../../modals";



@NgModule({

    declarations: [MainComponent, FooterComponent, VerificationModal, LoginModal,PhoneNumberModal,RegistrarionModals],
    imports: [MainRoutingModule, SharedModule],
    providers: [MenuItemsService],
    entryComponents: [VerificationModal, LoginModal,PhoneNumberModal,RegistrarionModals],
    exports: [],
})

export class MainModule { }