import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core"

@Component({
    selector: "app-total-cost",
    templateUrl: "total-cost.component.html",
    styleUrls: ["total-cost.component.scss"]
})

export class TotalCoastComponent implements OnInit {

    @Input() totalAmoutSum: number;
    @Output() byAll = new EventEmitter<boolean>();

    ngOnInit() {}

    onClickByAll() {
        this.byAll.emit(true);
    }

}