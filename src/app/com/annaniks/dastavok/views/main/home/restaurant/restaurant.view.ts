import { Component, OnInit } from "@angular/core"
import {  Router } from "@angular/router";

@Component({
    selector: "app-restaurant",
    templateUrl: "restaurant.view.html",
    styleUrls: ["restaurant.view.scss"]
})

export class RestaurantView implements OnInit {

    public mealItem: Array<any> = [
        {
            label: "Salads", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Autem, expedita, dict.", img: "assets/images/salad.jpg",
            router: "salads"
        },
        {
            label: "Dishes", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Autem, expedita, dict.", img: "assets/images/dishes.jpg",
            router: "dishes"
        },
        {
            label: "Alcohol", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Autem, expedita, dict.", img: "assets/images/alcohol.jpg",
            router: "alcohol"
        },
        {
            label: "Desert", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Autem, expedita, dict.", img: "assets/images/desert.jpg",
            title: "CATEGORIES", about: "ABOUT",
            router: "desert"
        }
    ]
    

    constructor(private router:Router) {
    }

    ngOnInit() { }

}
