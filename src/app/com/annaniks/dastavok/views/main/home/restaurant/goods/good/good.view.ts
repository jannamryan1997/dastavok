import { Component, OnInit } from "@angular/core"
import { Router, ActivatedRoute } from "@angular/router";

@Component({
    selector: "app-good",
    templateUrl: "good.view.html",
    styleUrls: ["good.view.scss"]
})

export class GoodComponent implements OnInit {
    public quarity: number = 1;
    public tab: number = 1;
    private _companyId: number;
    private _goodId: number;
    public activeImage: string = "/assets/images/sezar.jpg";
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

    constructor(private _router: Router, private _activatedRoute: ActivatedRoute) {
        this._activatedRoute.params.subscribe((params) => {
            console.log(params);
            this._companyId = params.companyId;
            this._goodId = params.good;
        })
    }

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

    public setActiveImage(image) {
        this.activeImage = image;
    }

    public onClickBuy() {
        let orderInfo = {
            companyId: +this._companyId,
            good:
            {
                id: +this._goodId,
                count: +this.quarity
            }
        };
        this._router.navigate(['/payment'], { queryParams: { order: JSON.stringify(orderInfo) } })
    }
}