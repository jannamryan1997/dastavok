import {NgModule} from "@angular/core"
import {RouterModule, Routes} from "@angular/router";
import { InformationView } from "./information.view";
const router:Routes=[
    {path:"",component:InformationView}
]
@NgModule({
imports:[RouterModule.forChild(router)],
exports:[RouterModule]
})

export class InformationRoutingModule{

}