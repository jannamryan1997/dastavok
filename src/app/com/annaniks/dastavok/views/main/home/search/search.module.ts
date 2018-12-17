import { NgModule } from "@angular/core"
import { SearchRoutingModule } from "./search.routing.module";
import { SearchComponent } from "./search.component";
//import { LeftMenuComponent } from "../../../../components";
import { CommonModule } from "@angular/common";
import { SearchService } from "./search.service";
import { SharedModule } from "../../../../shared/shared.module";

@NgModule({
    declarations: [SearchComponent],
    imports: [SearchRoutingModule,CommonModule,SharedModule],
    providers:[SearchService]
})

export class SearchModule {

}