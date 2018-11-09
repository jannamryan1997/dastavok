import {NgModule} from "@angular/core"
import { RestaurantRoutingModule } from "./restaurant.routing.module";
import { RestaurantView } from "./restaurant.view";
import {CommonModule} from "@angular/common";
import { RestaurantService } from "./restaurant.service";
import { NgxCarouselModule } from 'ngx-carousel';
import { GoodTypeListItemComponent,GoodTypeList, CompanyListComponent,CompanyListItemComponent, RatingComponent } from "../../../../components";

@NgModule({
    declarations:[RestaurantView,GoodTypeListItemComponent,GoodTypeList,CompanyListComponent,CompanyListItemComponent,RatingComponent],
    imports:[RestaurantRoutingModule,CommonModule,NgxCarouselModule],
    exports:[],
    providers:[RestaurantService]
})

export class RestaurantModule{

}