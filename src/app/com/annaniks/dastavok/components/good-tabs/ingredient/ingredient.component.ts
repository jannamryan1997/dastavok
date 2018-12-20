import { Component, OnInit, Input } from "@angular/core"
import { Topping } from "../../../models/models";

@Component({
    selector: "app-ingredient",
    templateUrl: "ingredient.component.html",
    styleUrls: ["ingredient.component.scss"]
})

export class IngredientComponent implements OnInit {
    @Input() topping: Topping;


    constructor() { }

    ngOnInit() { 
        
    }

    public countadd() {
        if(this.topping.toppingValue==1){
           
            return;
        }
        this.topping.toppingValue+=0.25;
        this.topping.stepPrice+=10;
    }
    public countremove() {
        if (this.topping.toppingValue== 0) {
            return;
        }
        this.topping.toppingValue-=0.25;
        this.topping.stepPrice-=10;

    }

}