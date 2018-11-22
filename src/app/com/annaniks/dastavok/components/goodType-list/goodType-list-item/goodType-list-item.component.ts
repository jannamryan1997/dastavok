import { Component, OnInit, Input } from "@angular/core"
import { GoodType } from "../../../models/models";

@Component({
    selector: "app-goodType-list-item",
    templateUrl: "goodType-list-item.component.html",
    styleUrls: ["goodType-list-item.component.scss"]
})

export class GoodTypeListItemComponent implements OnInit {

    @Input() goodTypeInfo;

    constructor() { }

    ngOnInit() { 
   
    }




}