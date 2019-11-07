import { Component, OnInit, Input, Inject } from "@angular/core"
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
    @Input('items') public items: object[] = [];
    public starCount: number = 4;

    constructor(@Inject('FILE_URL') public fileUrl: string) {

        this.items = [
            {
                title: "/assets/images/slider.jpg",
                label: "Burger",
                text: "Contrary to popular beelife"

            },
            {
                title: "/assets/images/slider2.jpg",
                label: "Burger",
                text: "Contrary to popular beelife"

            },
            {
                title: "/assets/images/slider2.jpeg",
                label: "Burger",
                text: "Contrary to popular beelife"

            },
            {
                title: "/assets/images/slider3.jpg",
                label: "Burger",
                text: "Contrary to popular beelife"

            },

            {
                title: "/assets/images/slider5.jpg",
                label: "Burger",
                text: "Contrary to popular beelife"

            },
            {
                title: "/assets/images/slider2.jpeg",
                label: "Burger",
                text: "Contrary to popular beelife"

            },

        ]

        this.carouselConfig = {
            grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
            slide: 1,
            speed: 400,
            interval: 2000,
            point: {
                visible: true,
            },
            loop: true,
            touch: true
        }
        this.carouselConfig2 = {
            grid: { xs: 2, sm: 2, md: 2, lg: 4, all: 0 },
            slide: 1,
            speed: 400,
            interval: 2000,
            point: {
                visible: false,
            },
            loop: true,
            touch: true
        }


    }

    ngOnInit() {}
}
