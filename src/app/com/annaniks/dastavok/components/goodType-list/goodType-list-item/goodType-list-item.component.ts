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

    constructor(@Inject("ADMIN_FILE_URL") private _fileUrl: string) { }

    ngOnInit() {
        this.image = `${this._fileUrl}${this.goodTypeInfo.image}`
    }




}