import {NgModule} from "@angular/core"
import { PaymentRoutingModule } from "./payment.routing.module";
import { PaymentView } from "./payment.view";

@NgModule({
    declarations:[PaymentView],
    imports:[PaymentRoutingModule],
    exports:[],
})

export class PaymentModule{

}