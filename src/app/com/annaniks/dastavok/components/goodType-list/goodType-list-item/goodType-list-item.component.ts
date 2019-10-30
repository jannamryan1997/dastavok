import { Component, OnInit, Input, Inject } from "@angular/core"
import { GoodType } from "../../../models/models";

@Component({
    selector: "app-goodType-list-item",
    templateUrl: "goodType-list-item.component.html",
    styleUrls: ["goodType-list-item.component.scss"]
})

export class GoodTypeListItemComponent implements OnInit {
    public image: string = '';

    @Input() goodTypeInfo;

    constructor(@Inject("BASE_URL") private _baseUrl: string) { }

    ngOnInit() {
        this.image = `${this._baseUrl}static/company/${this.goodTypeInfo.image}`
    }




}