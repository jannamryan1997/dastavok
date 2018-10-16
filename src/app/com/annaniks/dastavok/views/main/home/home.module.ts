import {NgModule} from "@angular/core";
import { HomeComponent } from "./home.component";
import { HomeRoutingModule } from "./home.routing.module";
import { SharedModule } from "../../../shared/shared.module";
import { LeftMenuComponent } from "../../../components";
import { NgxCarouselModule } from 'ngx-carousel';


@NgModule({
    declarations:[HomeComponent,LeftMenuComponent],
    imports:[HomeRoutingModule,SharedModule,NgxCarouselModule],
    exports:[]
})
export class HomeModule{

}