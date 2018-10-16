import { Component, OnInit } from "@angular/core"
import { MenuItemsService } from "../../../services";
import { NgxCarousel } from 'ngx-carousel';
@Component({
    selector: "app-home",
    templateUrl: "home.component.html",
    styleUrls: ["home.component.scss"]
})

export class HomeComponent implements OnInit {
    public carouselConfig: NgxCarousel;
    public items: object[] = [];
    constructor(public menuItemsService: MenuItemsService) {
        this.items = [
            {
                title: 'slide 1',
                color: 'green'
            },
            {
                title: 'slide 2',
                color: 'blue'
            },
            {
                title: 'slide 3',
                color: 'red'
            }
        ]

        this.carouselConfig = {
            grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
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

    ngOnInit() { }
}