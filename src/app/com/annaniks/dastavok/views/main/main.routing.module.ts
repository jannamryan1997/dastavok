import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"
import { MainComponent } from "./main.view";
import { AuthGuard } from "../../guards/authguard.service";
const router: Routes = [
    {
        path: "", component: MainComponent, children: [
            { path: "", loadChildren: () => import('./home/home.module').then(m => m.HomeModule), pathMatch: "full" },
            { path: "contact", loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule) },
            { path: "profile", loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule), canActivate: [AuthGuard] },
            { path: "payment", loadChildren: () => import('./payment/payment.module').then(m => m.PaymentModule), canActivate: [AuthGuard] }

        ]
    }
]
@NgModule({
    imports: [RouterModule.forChild(router)],
    exports: [RouterModule]
})

export class MainRoutingModule {

}