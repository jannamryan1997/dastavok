import { NgModule } from "@angular/core"
import {RouterModule,Routes} from "@angular/router"
import { CompanyView } from "./company.view";
const router:Routes=[
    {path:"",component:CompanyView}
]
@NgModule({

    imports: [RouterModule.forChild(router)],
    exports: [RouterModule],
})
export class CompanyRoutingModule {

}