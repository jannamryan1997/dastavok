import { Component, OnInit, Input } from "@angular/core"

@Component({
    selector: "app-total-cost",
    templateUrl: "total-cost.component.html",
    styleUrls: ["total-cost.component.scss"]
})

export class TotalCoastComponent implements OnInit {

   @Input() totalAmoutSum:number;

   ngOnInit(){}

}