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
    public items: object[] = [];
    public starCount: number = 4;
    public items_star: Array<any> =
        [
            { label: "" },
            { label: "" },
            { label: "" },
            { label: "" },
            { label: "" },
        ]

    constructor() {
        this.items = [
            {
                title: "/assets/images/slide.jpg",
                label: "Burger",
                text: "Contrary to popular beelife"

            },
            {
                title: "/assets/images/slide.jpg",
                label: "Burger",
                text: "Contrary to popular beelife"

            },
            {
                title: "/assets/images/slide.jpg",
                label: "Burger",
                text: "Contrary to popular beelife"

            },
            {
                title: "/assets/images/slide.jpg",
                label: "Burger",
                text: "Contrary to popular beelife"

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
            grid: { xs: 1, sm: 4, md: 4, lg: 4, all: 4 },
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
