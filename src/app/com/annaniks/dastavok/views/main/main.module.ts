import { NgModule } from "@angular/core"
import { MainRoutingModule } from "./main.routing.module";
import { MainComponent } from "./main.view";
import { SharedModule } from "../../shared/shared.module";
import { MenuItemsService } from "../../services";
import { FooterComponent } from "../../components/footer/footer.component";
import { LoginModal, VerificationModal, PhoneNumberModal, SignUpModal, NewPasswordModals, UserUpdateModal,AddressEditModal,RegistrationStep } from "../../modals";
import { HttpClientModule } from "@angular/common/http"
import { ProfileService } from "./profile/profile.service";
import { PaymentService } from "./payment/payment.service";
import { AuthGuard } from "../../guards/authguard.service";
import { MenuService } from "../../services/menu.service";


@NgModule({

    declarations: [MainComponent, FooterComponent, VerificationModal, LoginModal, PhoneNumberModal, SignUpModal, NewPasswordModals, UserUpdateModal,AddressEditModal,RegistrationStep],
    imports: [MainRoutingModule, SharedModule, HttpClientModule],
    providers: [MenuItemsService,ProfileService,PaymentService,AuthGuard,MenuService],
    entryComponents: [VerificationModal, LoginModal, PhoneNumberModal, SignUpModal, NewPasswordModals, UserUpdateModal,AddressEditModal,RegistrationStep],
    exports: [],
})

export class MainModule { }