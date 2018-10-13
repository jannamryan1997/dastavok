import {NgModule} from "@angular/core"
import { MainRoutingModule } from "./main.routing.module";
import { MainComponent } from "./main.view";
import { SharedModule } from "../../shared/shared.module";
import { MenuItemsService } from "../../services";



@NgModule({
    declarations:[MainComponent],
    imports:[MainRoutingModule,SharedModule],
    providers:[MenuItemsService],
    exports:[],
})

export class MainModule{}