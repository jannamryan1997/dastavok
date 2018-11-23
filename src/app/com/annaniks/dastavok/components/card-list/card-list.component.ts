import { Component, OnInit, Input } from "@angular/core"
import { Card } from "../../models/models";

@Component({
    selector: "app-card-list",
    templateUrl: 'card-list.component.html',
    styleUrls: ["card-list.component.scss"]
})

export class CardListComponent implements OnInit {


    @Input() cardInfo = {};


    constructor() { }

    ngOnInit() {
        
       

    }
}