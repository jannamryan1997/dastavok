import { NgModule } from "@angular/core"
import { InformationView } from "./information.view";
import { InformationRoutingModule } from "./information.routing.module";
import { SharedModule } from "../../../../shared/shared.module";
import { InformationService } from "./information.service";
@NgModule({
    declarations: [InformationView],
    imports: [InformationRoutingModule,SharedModule],
    providers:[InformationService],
    exports: [],
})

export class InformationModule { }