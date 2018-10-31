import { Component, OnInit } from "@angular/core"

@Component({
    selector: "app-card",
    templateUrl: "card.view.html",
    styleUrls: ["card.view.scss"]
})

export class CardView implements OnInit {

    public cardItem: Array<object> = [
        {
            image: "assets/images/sezar.jpg", name: "Sezar", title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Facilis, perferendis iustperspiciatis molestias, aspernatur molestiae ipsum enim quis atque officia, a nemo animi.Quam totam placeat illum! Esse, iste tempora ?",
            price: "10$", total: "10$"
        },
        {
            image: "assets/images/sezar.jpg", name: "Sezar", title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Facilis, perferendis iustperspiciatis molestias, aspernatur molestiae ipsum enim quis atque officia, a nemo animi.Quam totam placeat illum! Esse, iste tempora ?",
            price: "10$", total: "10$"
        },
        {
            image: "assets/images/sezar.jpg", name: "Sezar", title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Facilis, perferendis iustperspiciatis molestias, aspernatur molestiae ipsum enim quis atque officia, a nemo animi.Quam totam placeat illum! Esse, iste tempora ?",
            price: "10$", total: "10$"
        },

    ]

    constructor() { }

    ngOnInit() { }
}