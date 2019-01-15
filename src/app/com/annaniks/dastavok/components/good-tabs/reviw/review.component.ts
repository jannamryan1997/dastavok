import { Component, OnInit, Input } from "@angular/core"
import { Review } from "../../../models/models";

@Component({
    selector: "app-review",
    templateUrl: "review.component.html",
    styleUrls: ["review.component.scss"]
})

export class ReviwComponent implements OnInit {

    public ratingCount: number = 4;
    public count: number;
    public page: number = 1;
    public pageLength: number = 10;
    public reviewImage: string = "assets/images/uzer.jpg";
    @Input() reviewData: Review;
    @Input() reviewDataTime: string;
    constructor() { }

    ngOnInit() {
        console.log(this.reviewData);
console.log(this.reviewDataTime);



    }

}
