import { NgModule } from "@angular/core"
import { PaymentRoutingModule } from "./payment.routing.module";
import { PaymentView } from "./payment.view";
import { CommonModule } from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";
import { CheckoutTabComponent,DoneTabComponent,PaymentTabComponent } from "../../../components";
import { SharedModule } from "../../../shared/shared.module";


@NgModule({
    declarations: [PaymentView,CheckoutTabComponent,DoneTabComponent,PaymentTabComponent],
    imports: [PaymentRoutingModule, CommonModule,ReactiveFormsModule,SharedModule],
    providers:[],
    exports: [],
})

export class PaymentModule  {

   
}