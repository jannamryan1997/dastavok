import { Component, OnInit } from "@angular/core"
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: "app-goods",
    templateUrl: "goods.view.html",
    styleUrls: ["goods.view.scss"]
})

export class GoodsView implements OnInit {
    public salatsItem: Array<object> = [
        {
            label: "Sezar", title: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur porro consequatur cum minima sequi dolore ieum! Illum, rem id officia ut at qui et maiores ullam magnam, ea eaque.",
            money: "10$", image: "assets/images/sezar.jpg"
        },
        {
            label: "Olivier", title: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur porro consequatur cum minima sequi dolore ieum! Illum, rem id officia ut at qui et maiores ullam magnam, ea eaque.",
            money: "10$", image: "assets/images/olivier.jpg"
        },
        {
            label: "Salads", title: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur porro consequatur cum minima sequi dolore ieum! Illum, rem id officia ut at qui et maiores ullam magnam, ea eaque.",
            money: "10$", image: "assets/images/salads_1.jpg"
        },
        {
            label: "Salads", title: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur porro consequatur cum minima sequi dolore ieum! Illum, rem id officia ut at qui et maiores ullam magnam, ea eaque.",
            money: "10$", image: "assets/images/salads_2.jpg"
        },
        {
            label: "Salads", title: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur porro consequatur cum minima sequi dolore ieum! Illum, rem id officia ut at qui et maiores ullam magnam, ea eaque.",
            money: "10$", image: "assets/images/salads_3.jpg"
        },
        {
            label: "Salads", title: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur porro consequatur cum minima sequi dolore ieum! Illum, rem id officia ut at qui et maiores ullam magnam, ea eaque.",
            money: "10$", image: "assets/images/salads_4.jpg"
        },
        {
            label: "Salads", title: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur porro consequatur cum minima sequi dolore ieum! Illum, rem id officia ut at qui et maiores ullam magnam, ea eaque.",
            money: "10$", image: "assets/images/salads_5.jpg"
        },
        {
            label: "Salads", title: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur porro consequatur cum minima sequi dolore ieum! Illum, rem id officia ut at qui et maiores ullam magnam, ea eaque.",
            money: "10$", image: "assets/images/salads_6.jpg"
        },
        {
            label: "Salads", title: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur porro consequatur cum minima sequi dolore ieum! Illum, rem id officia ut at qui et maiores ullam magnam, ea eaque.",
            money: "10$", image: "assets/images/salad.jpg"
        },
        {
            label: "Salads", title: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur porro consequatur cum minima sequi dolore ieum! Illum, rem id officia ut at qui et maiores ullam magnam, ea eaque.",
            money: "10$", image: "assets/images/salads_3.jpg"
        },
        {
            label: "Salads", title: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur porro consequatur cum minima sequi dolore ieum! Illum, rem id officia ut at qui et maiores ullam magnam, ea eaque.",
            money: "10$", image: "assets/images/salads_5.jpg"
        },
        {
            label: "Salads", title: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur porro consequatur cum minima sequi dolore ieum! Illum, rem id officia ut at qui et maiores ullam magnam, ea eaque.",
            money: "10$", image: "assets/images/salad.jpg"
        },
    ]

    constructor(private activatedRoute:ActivatedRoute) { 
        this.activatedRoute.params.subscribe((params)=>{
            console.log(params);
            
        })
    }
    ngOnInit() { }
}