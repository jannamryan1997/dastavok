import {NgModule} from "@angular/core"
import { PaymentView } from "./payment.view";
import {RouterModule,Routes} from "@angular/router";

const paymentRouter:Routes=[
    {path:"",component:PaymentView}
]

@NgModule({
    imports:[RouterModule.forChild(paymentRouter)],
    exports:[RouterModule],
})

export class PaymentRoutingModule{
}