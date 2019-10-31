import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router";
import { ProfileView } from "./profile.view";

const profileRouter: Routes =
    [
        { path: "", component: ProfileView}
    ]
@NgModule({

    imports: [RouterModule.forChild(profileRouter)],
    exports: [RouterModule]
})
export class ProfileRoutingModule {

}