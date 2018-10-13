import {NgModule} from "@angular/core";
import { HomeComponent } from "./home.component";
import { HomeRoutingModule } from "./home.routing.module";
import { SharedModule } from "../../../shared/shared.module";
import { LeftMenuComponent } from "../../../components";


@NgModule({
    declarations:[HomeComponent,LeftMenuComponent],
    imports:[HomeRoutingModule,SharedModule],
    exports:[]
})
export class HomeModule{

}