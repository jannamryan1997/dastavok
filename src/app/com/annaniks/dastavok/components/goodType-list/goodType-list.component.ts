import { Component, OnInit } from "@angular/core"

@Component({
    selector: "app-goodType-list",
    template: `<div display-flex full-width flex-wrap-wrap class="container">
    <ng-content></ng-content>
</div>`,

})
export class GoodTypeList implements OnInit {

    constructor() { }

    ngOnInit() { }

}

