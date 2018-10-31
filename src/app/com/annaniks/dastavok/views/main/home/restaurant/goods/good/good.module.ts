import {NgModule} from "@angular/core"
import { GoodComponent } from "./good.view";
import { GoodRoutingModule } from "./good.routing.module";
import {CommonModule} from "@angular/common"
@NgModule({
    declarations:[GoodComponent],
    imports:[GoodRoutingModule,CommonModule],
    exports:[]
})
export class GoodModule{
    
}