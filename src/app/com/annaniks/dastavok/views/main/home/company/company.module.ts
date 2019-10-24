import {NgModule} from "@angular/core"
import { CompanyView } from "./company.view";
import { CompanyRoutingModule } from "./company.routing.module";
import { SharedModule } from "../../../../shared/shared.module";

@NgModule({
    declarations:[CompanyView],
    imports:[CompanyRoutingModule,SharedModule],
    exports:[],
})
export class CompanyModule{

}