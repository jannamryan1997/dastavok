import { Component, OnInit, Input } from "@angular/core"
import { NgxCarousel } from "ngx-carousel";
import { BriefCompany } from "../../../models/models";




@Component({
    selector: "app-company-list-item",
    templateUrl: "company-list-item.component.html",
    styleUrls: ["company-list-item.component.scss"]
})

export class CompanyListItemComponent implements OnInit {
    @Input() companyItem: BriefCompany;
    public starCount: number = 4;
    public carouselConfig: NgxCarousel;


    constructor() {

        this.carouselConfig = {
            grid: { xs: 1, sm: 3, md: 3, lg: 3, all: 3 },
            slide: 1,
            speed: 400,
            interval: 10000,
            point: {
                visible: true,
            },
            loop: true,
            touch: true
        }
    }
    ngOnInit() {
    
    }






}