import { Component, OnInit, Input } from "@angular/core"


@Component({
    selector: "app-rating",
    templateUrl: "rating.component.html",
    styleUrls: ["rating.component.scss"]
})

export class RatingComponent implements OnInit {

    public starsItem: Array<number> = [0, 0, 0, 0, 0]
    @Input() currentIndex;
    @Input() changeRating: boolean;
    @Input() starSize:number=16;
    constructor() { }

    ngOnInit() { }


    public raiting(index) {
        if (this.changeRating == true) {
            this.currentIndex = index;
        }
        (this.currentIndex)
    }
}