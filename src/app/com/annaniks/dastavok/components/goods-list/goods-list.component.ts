import { Component } from "@angular/core";

@Component({
    selector: "app-goods-list",
    template: `
    <div display-flex full-width flex-wrap-wrap class="container">
        <ng-content></ng-content>
    </div>`,
    styleUrls:['goods-list.component.scss']
})

export class GoodsListComponent {

}