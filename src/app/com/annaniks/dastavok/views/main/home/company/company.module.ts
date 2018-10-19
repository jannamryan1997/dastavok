import {NgModule} from "@angular/core"
import { CompanyView } from "./company.view";
import { CompanyRoutingModule } from "./company.routing.module";

@NgModule({
    declarations:[CompanyView],
    imports:[CompanyRoutingModule],
    exports:[],
})
export class CompanyModule{

}