import { NgModule } from "@angular/core"
import { InformationView } from "./information.view";
import { InformationRoutingModule } from "./information.routing.module";
import { SliderComponent, CompanyListComponent, CompanyListItemComponent, LeftMenuComponent } from "../../../../components";
import { NgxCarouselModule } from 'ngx-carousel';
import { CommonModule } from "@angular/common"
import { SharedModule } from "../../../../shared/shared.module";
import { InformationService } from "./information.service";

@NgModule({
    declarations: [InformationView, SliderComponent, CompanyListComponent, CompanyListItemComponent, LeftMenuComponent],
    imports: [InformationRoutingModule, NgxCarouselModule, CommonModule, SharedModule],
    providers:[InformationService],
    exports: [],
})

export class InformationModule { }