import { Component, OnInit } from "@angular/core"

@Component({
    selector: "app-good",
    templateUrl: "good.view.html",
    styleUrls: ["good.view.scss"]
})

export class GoodComponent implements OnInit {
    public quarity: number = 1;
    public add: string = "+";
    public remove: string = "-";
    public tab: number = 1;
    public activeImage:string="/assets/images/sezar.jpg";
    public goodItems: Array<object> = [
        { image: "assets/images/sezar.jpg" },
        { image: "assets/images/salad.jpg" },
        { image: "assets/images/salads_1.jpg" }
    ]
    public ingredientItems: Array<object> = [
        { label: "ingr_1", mony: "5$" },
        { label: "ingr_1", mony: "5$" },
        { label: "ingr_1", mony: "5$" },
        { label: "ingr_1", mony: "5$" },
        { label: "ingr_1", mony: "5$" },
        { label: "ingr_1", mony: "5$" },
        { label: "ingr_1", mony: "5$" },
    ]

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

    public openDescription() {
        this.tab = 1;
    }

    public openReview() {
        this.tab = 2;
    }

    public openIngredient() {
        this.tab = 3;
    }

    public countdAdd() {
        this.quarity++;
    }
    public countremove() {
       
        if (this.quarity == 1) {
           return;


        }
        this.quarity--;
    }
    public setActiveImage(image){
        this.activeImage=image;
    }
}