import { Component, OnInit, Input } from "@angular/core"
import { Topping } from "../../../models/models";

@Component({
    selector: "app-ingredient",
    templateUrl: "ingredient.component.html",
    styleUrls: ["ingredient.component.scss"]
})

export class IngredientComponent implements OnInit {

    public count: number = 1;

    @Input() topping: Array<Topping>;


    constructor() { }

    ngOnInit() { }

    public countadd() {
        this.count++;
    }
    public countremove() {
        if (this.count == 1) {
            return false;
        }
        this.count--;

    }

}