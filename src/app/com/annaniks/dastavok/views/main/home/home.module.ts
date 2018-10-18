import {NgModule} from "@angular/core";
import { HomeView } from "./home.view";
import { HomeRoutingModule } from "./home.routing.module";
import { SharedModule } from "../../../shared/shared.module";
import { LeftMenuComponent } from "../../../components";


@NgModule({
    declarations:[HomeView,LeftMenuComponent],
    imports:[HomeRoutingModule,SharedModule],
    exports:[]
})
export class HomeModule{

}