import { Component, OnInit, Input } from "@angular/core"

@Component({
    selector: "app-order-list",
    template: `<div flex-wrap-wrap class="container">
    <ng-content></ng-content>
</div>`
})

export class OrderListComponent implements OnInit {

ngOnInit(){}
}