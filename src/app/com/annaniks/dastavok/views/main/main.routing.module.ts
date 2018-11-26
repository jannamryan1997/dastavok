import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"
import { MainComponent } from "./main.view";
import { AuthGuard } from "../../guards/authguard.service";
const router: Routes = [
    {
        path: "", component: MainComponent, children: [
            { path: "", redirectTo: "home", pathMatch: "full" },
            { path: "home", loadChildren: "src/app/com/annaniks/dastavok/views/main/home/home.module#HomeModule" },
            { path: "contact", loadChildren: "src/app/com/annaniks/dastavok/views/main/contact/contact.module#ContactModule" },
            { path: "profile", loadChildren: "src/app/com/annaniks/dastavok/views/main/profile/profile.module#ProfileModule", canActivate:[AuthGuard] },
            { path: "payment", loadChildren: "src/app/com/annaniks/dastavok/views/main/payment/payment.module#PaymentModule",canActivate:[AuthGuard] }

        ]
    }
]
@NgModule({
    imports: [RouterModule.forChild(router)],
    exports: [RouterModule]
})

export class MainRoutingModule {

}