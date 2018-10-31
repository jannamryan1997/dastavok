import { Component, OnInit,Input } from "@angular/core"

@Component({
    selector: "app-card-list-item",
    templateUrl: "card-list-item.component.html",
    styleUrls: ["card-list-item.component.scss"]
})

export class CardListItemComponent implements OnInit {

    public quarity: number = 1;
    public add: string = "+";
    public remove: string = "-";
     @Input()cardInfo ={};

    constructor() { }

    ngOnInit() { }

    public removeQuarity() {

        if (this.quarity == 1) {
            return;


        }
        this.quarity--;
    }

    public addQuarity() {
        this.quarity++;
    }
}