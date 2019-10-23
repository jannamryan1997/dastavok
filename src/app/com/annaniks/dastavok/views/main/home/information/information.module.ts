import { NgModule } from "@angular/core"
import { InformationView } from "./information.view";
import { InformationRoutingModule } from "./information.routing.module";
// import { SliderComponent, CompanyListComponent, CompanyListItemComponent} from "../../../../components";
// import { NgxCarouselModule } from 'ngx-carousel';
// import { CommonModule } from "@angular/common"
// import { SharedModule } from "../../../../shared/shared.module";
// import { InformationService } from "./information.service";
// import {ProgressBarModule} from 'primeng/progressbar';
@NgModule({
    declarations: [InformationView],
    imports: [InformationRoutingModule],
    providers:[],
    exports: [],
})

export class InformationModule { }