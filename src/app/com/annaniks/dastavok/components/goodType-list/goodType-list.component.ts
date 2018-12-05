import { Component, OnInit } from "@angular/core"

@Component({
    selector: "app-goodType-list",
    template: `<div display-flex flex-direction-column>
                <ng-content></ng-content>
               </div>`,
    styles:[]

})
export class GoodTypeList implements OnInit {

    constructor() { }

    ngOnInit() { }

}

