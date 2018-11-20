import { Component, OnInit } from "@angular/core"

@Component({
    selector: "app-review",
    templateUrl: "review.component.html",
    styleUrls: ["review.component.scss"]
})

export class ReviwComponent implements OnInit {

    public ratingCount: number = 4;
    
    public reviewItem: Array<object> = [
        {
            image: "assets/images/uzer.jpg", title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Facilis, perferendis iustperspiciatis molestias, aspernatur molestiae ipsum enim quis atque officia, a nemo animi.Quam totam placeat illum! Esse, iste tempora ?",
            data: "04/10/18"
        },
        {
            image: "assets/images/uzer.jpg", title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Facilis, perferendis iustperspiciatis molestias, aspernatur molestiae ipsum enim quis atque officia, a nemo animi.Quam totam placeat illum! Esse, iste tempora ?",
            data: "04/10/18"
        },
        {
            image: "assets/images/uzer.jpg", title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Facilis, perferendis iustperspiciatis molestias, aspernatur molestiae ipsum enim quis atque officia, a nemo animi.Quam totam placeat illum! Esse, iste tempora ?",
            data: "04/10/18"
        },
        {
            image: "assets/images/uzer.jpg", title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Facilis, perferendis iustperspiciatis molestias, aspernatur molestiae ipsum enim quis atque officia, a nemo animi.Quam totam placeat illum! Esse, iste tempora ?",
            data: "04/10/18"
        },
        {
            image: "assets/images/uzer.jpg", title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Facilis, perferendis iustperspiciatis molestias, aspernatur molestiae ipsum enim quis atque officia, a nemo animi.Quam totam placeat illum! Esse, iste tempora ?",
            data: "04/10/18"
        },
        {
            image: "assets/images/uzer.jpg", title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Facilis, perferendis iustperspiciatis molestias, aspernatur molestiae ipsum enim quis atque officia, a nemo animi.Quam totam placeat illum! Esse, iste tempora ?",
            data: "04/10/18"
        },
        {
            image: "assets/images/uzer.jpg", title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Facilis, perferendis iustperspiciatis molestias, aspernatur molestiae ipsum enim quis atque officia, a nemo animi.Quam totam placeat illum! Esse, iste tempora ?",
            data: "04/10/18"
        },
        {
            image: "assets/images/uzer.jpg", title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Facilis, perferendis iustperspiciatis molestias, aspernatur molestiae ipsum enim quis atque officia, a nemo animi.Quam totam placeat illum! Esse, iste tempora ?",
            data: "04/10/18"
        },
    ]
    constructor() { }

    ngOnInit() { }

}