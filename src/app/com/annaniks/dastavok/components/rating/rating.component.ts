import { Component, OnInit } from "@angular/core"

@Component({
    selector: "app-rating",
    templateUrl: "rating.component.html",
    styleUrls: ["rating.component.scss"]
})

export class RatingComponent implements OnInit {

    public starsItem: Array<number> = [0, 0, 0, 0, 0]
    public currentIndex: number;
   

    constructor() { }

    ngOnInit() {
    }

    public raiting(index: number) {
        this.currentIndex=index;
    }

}


