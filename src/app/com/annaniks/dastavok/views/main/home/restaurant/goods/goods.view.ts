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
            money: "10$", image: "assets/images/sezar.jpg",router:"sezar"
        },
        {
            label: "Olivier", title: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur porro consequatur cum minima sequi dolore ieum! Illum, rem id officia ut at qui et maiores ullam magnam, ea eaque.",
            money: "10$", image: "assets/images/olivier.jpg",router:"olivier"
        },
        {
            label: "Salads", title: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur porro consequatur cum minima sequi dolore ieum! Illum, rem id officia ut at qui et maiores ullam magnam, ea eaque.",
            money: "10$", image: "assets/images/salads_1.jpg",router:"salads"
        },
        {
            label: "Salads", title: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur porro consequatur cum minima sequi dolore ieum! Illum, rem id officia ut at qui et maiores ullam magnam, ea eaque.",
            money: "10$", image: "assets/images/salads_2.jpg",router:"salads"
        },
        {
            label: "Salads", title: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur porro consequatur cum minima sequi dolore ieum! Illum, rem id officia ut at qui et maiores ullam magnam, ea eaque.",
            money: "10$", image: "assets/images/salads_3.jpg",router:"salads"
        },
        {
            label: "Salads", title: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur porro consequatur cum minima sequi dolore ieum! Illum, rem id officia ut at qui et maiores ullam magnam, ea eaque.",
            money: "10$", image: "assets/images/salads_4.jpg",router:"salads"
        },
        {
            label: "Salads", title: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur porro consequatur cum minima sequi dolore ieum! Illum, rem id officia ut at qui et maiores ullam magnam, ea eaque.",
            money: "10$", image: "assets/images/salads_5.jpg",router:"salads"
        },
        {
            label: "Salads", title: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur porro consequatur cum minima sequi dolore ieum! Illum, rem id officia ut at qui et maiores ullam magnam, ea eaque.",
            money: "10$", image: "assets/images/salads_6.jpg",router:"salads"
        },
        {
            label: "Salads", title: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur porro consequatur cum minima sequi dolore ieum! Illum, rem id officia ut at qui et maiores ullam magnam, ea eaque.",
            money: "10$", image: "assets/images/salad.jpg",router:"salads"
        },
        {
            label: "Salads", title: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur porro consequatur cum minima sequi dolore ieum! Illum, rem id officia ut at qui et maiores ullam magnam, ea eaque.",
            money: "10$", image: "assets/images/salads_3.jpg",router:"salads"
        },
        {
            label: "Salads", title: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur porro consequatur cum minima sequi dolore ieum! Illum, rem id officia ut at qui et maiores ullam magnam, ea eaque.",
            money: "10$", image: "assets/images/salads_5.jpg",router:"salads"
        },
        {
            label: "Salads", title: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur porro consequatur cum minima sequi dolore ieum! Illum, rem id officia ut at qui et maiores ullam magnam, ea eaque.",
            money: "10$", image: "assets/images/salad.jpg",router:"salads"
        },
    ]

    constructor(private activatedRoute:ActivatedRoute) { 
        this.activatedRoute.params.subscribe((params)=>{
            console.log(params);
            
        })
    }
    ngOnInit() { }
}