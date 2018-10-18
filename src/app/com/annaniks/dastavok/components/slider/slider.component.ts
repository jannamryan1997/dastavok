import { Component, OnInit, Input } from "@angular/core"
import { NgxCarousel } from 'ngx-carousel';
@Component({
    selector: "app-slider",
    templateUrl: "slider.component.html",
    styleUrls: ["slider.component.scss"]
})

export class SliderComponent implements OnInit {
    @Input() public sliderMode: string;
    public carouselConfig: NgxCarousel;
    public carouselConfig2: NgxCarousel;
    public carouselConfig3:NgxCarousel;
    public items: object[] = [];
    public items_star:Array<any>=
    [
        {label:""},
        {label:""},
        {label:""},
        {label:""},
        {label:""}
    ]

    constructor() {
        this.items = [
            {
                title: "/assets/images/slider.png",
                label: "Burger",
                text:"Contrary to popular beelife"

            },
            {
                title: "/assets/images/slider.png",
                label: "Burger",
                text:"Contrary to popular beelife"

            },
            {
                title: "/assets/images/slider.png",
                label: "Burger",
                text:"Contrary to popular beelife"

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
        this.carouselConfig2 = {
            grid: { xs: 1, sm: 3, md: 3, lg: 3, all: 3 },
            slide: 1,
            speed: 400,
            interval: 10000,
            point: {
                visible: false,
            },
            loop: true,
            touch: true
        }


    }

    ngOnInit() {

    }
}
