import { NgModule } from "@angular/core"
import { PaymentRoutingModule } from "./payment.routing.module";
import { PaymentView } from "./payment.view";
import { CommonModule } from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";
import { CheckoutTabComponent,DoneTabComponent,PaymentTabComponent } from "../../../components";
import { PaymentService } from "./payment.service";

@NgModule({
    declarations: [PaymentView,CheckoutTabComponent,DoneTabComponent,PaymentTabComponent],
    imports: [PaymentRoutingModule, CommonModule,ReactiveFormsModule,],
    providers:[PaymentService],
    exports: [],
})

export class PaymentModule  {

   
}