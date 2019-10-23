import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"
import { MainComponent } from "./main.view";
import { AuthGuard } from "../../guards/authguard.service";
const router: Routes = [
    {
        path: "", component: MainComponent, children: [
            { path: "", loadChildren: "./home/home.module#HomeModule", pathMatch: "full" },
            { path: "contact", loadChildren: "./contact/contact.module#ContactModule" },
            { path: "profile", loadChildren: "./profile/profile.module#ProfileModule", canActivate: [AuthGuard] },
            { path: "payment", loadChildren: "./payment/payment.module#PaymentModule", canActivate: [AuthGuard] }

        ]
    }
]
@NgModule({
    imports: [RouterModule.forChild(router)],
    exports: [RouterModule]
})

export class MainRoutingModule {

}