import { NgModule } from "@angular/core"
import { InformationView } from "./information.view";
import { InformationRoutingModule } from "./information.routing.module";
import { SliderComponent } from "../../../../components";
import { NgxCarouselModule } from 'ngx-carousel';
import { CommonModule } from "@angular/common"

@NgModule({
    declarations: [InformationView, SliderComponent],
    imports: [InformationRoutingModule, NgxCarouselModule, CommonModule],
    exports: [],
})

export class InformationModule { }