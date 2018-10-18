import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"
import { ContactView } from "./contact.view";

const router: Routes = [
    { path: "", component: ContactView}
]
@NgModule({

    imports: [RouterModule.forChild(router)],
    exports: [RouterModule],
})

export class ContactRoutingModule {

}