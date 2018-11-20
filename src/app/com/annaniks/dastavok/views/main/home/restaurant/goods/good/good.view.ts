import { Component, OnInit, Inject } from "@angular/core"
import { Router, ActivatedRoute } from "@angular/router";
import { GoodService } from "./good.service";
import { Good, ServerResponse, Topping } from "src/app/com/annaniks/dastavok/models/models";

@Component({
    selector: "app-good",
    templateUrl: "good.view.html",
    styleUrls: ["good.view.scss"]
})

export class GoodComponent implements OnInit {
    public starCount: number = 4;
    public quarity: number = 1;
    public tab: number = 1;
    private _companyId: number;
    private _goodId: number;
    public activeImage: string;
    public goodImage: Array<string>;
    public goodData: Good;
    public toppingData: Array<Topping>;

    constructor(@Inject('BASE_URL') private _baseUrl, private _router: Router, private _activatedRoute: ActivatedRoute, private _goodService: GoodService) {
        this._activatedRoute.params.subscribe((params) => {
            console.log(params);
            this._companyId = params.companyId;
            this._goodId = params.good;
        })
    }

    ngOnInit() {


        this._getGood();
    }

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
        this.activeImage = 'http://192.168.0.111:4000/static/company/' + image;
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

    private _getGood() {
        this._goodService.getGood(this._goodId)
            .subscribe((data: ServerResponse<Good>) => {
                this.goodData = data.data;
                this.toppingData = data.data.toppings;
                if (data.data.thumbnail) {
                    this.activeImage = 'http://192.168.0.111:4000/static/company/' + data.data.thumbnail;
                }

                if (data.data.images) {
                    this.goodImage = data.data.images.split(",")
                }

                console.log(this.toppingData);

                console.log(data);

            })
    }

}