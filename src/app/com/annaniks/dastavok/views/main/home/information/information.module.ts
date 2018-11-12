import { NgModule } from "@angular/core"
import { InformationView } from "./information.view";
import { InformationRoutingModule } from "./information.routing.module";
import { SliderComponent, CompanyListComponent, CompanyListItemComponent, LeftMenuComponent } from "../../../../components";
import { NgxCarouselModule } from 'ngx-carousel';
import { CommonModule } from "@angular/common"
import { SharedModule } from "../../../../shared/shared.module";

@NgModule({
    declarations: [InformationView, SliderComponent, CompanyListComponent, CompanyListItemComponent, LeftMenuComponent],
    imports: [InformationRoutingModule, NgxCarouselModule, CommonModule, SharedModule],
    exports: [],
})

export class InformationModule { }