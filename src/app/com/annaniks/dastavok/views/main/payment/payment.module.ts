import { NgModule } from "@angular/core"
import { PaymentRoutingModule } from "./payment.routing.module";
import { PaymentView } from "./payment.view";
import { CommonModule } from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";
import { CheckoutTabComponent,DoneTabComponent,PaymentTabComponent } from "../../../components";

@NgModule({
    declarations: [PaymentView,CheckoutTabComponent,DoneTabComponent,PaymentTabComponent],
    imports: [PaymentRoutingModule, CommonModule,ReactiveFormsModule,],
    exports: [],
})

export class PaymentModule  {

   
}