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
    private _companyId: number;
    private _goodId: number;
    public starCount: number = 4;
    public count: number = 1;
    public tab: number = 1;
    public activeImage: string;
    public goodImage: Array<string>;
    public good: Good;
    public toppings: Array<Topping>;
    public top: Array<any> = [];

    constructor(@Inject('BASE_URL') private _baseUrl, private _router: Router, private _activatedRoute: ActivatedRoute, private _goodService: GoodService) {
        this._activatedRoute.params.subscribe((params) => {
            console.log(params);
            this._companyId = +params.companyId;
            this._goodId = +params.good;
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
        this.count++;
    }

    public countremove() {
        if (this.count == 1) {
            return;
        }
        this.count--;
    }

    public setActiveImage(image) {
        this.activeImage = 'http://192.168.0.111:4000/static/company/' + image;
    }

    public onClickBuy() {
        let orderInfo = {
            companyId: this._companyId,
            good:
            {
                id: this._goodId,
                count: this.count
            }
        };
        this._router.navigate(['/payment'], { queryParams: { order: JSON.stringify(orderInfo) } })
    }

    private _getGood() {
        this._goodService.getGood(this._goodId)
            .subscribe((data: ServerResponse<Good>) => {
                this.good = data.data;
                this.toppings = data.data.toppings;
                this.toppings.forEach((element) => {
                    element.toppingValue = 0;
                })
                if (data.data.thumbnail) {
                    this.activeImage = 'http://192.168.0.111:4000/static/company/' + data.data.thumbnail;
                }
                if (data.data.images) {
                    this.goodImage = data.data.images.split(",")
                }
            })
    }

    public orderChart() {
        let toppings = [];
        this.toppings.forEach((element: Topping) => {
            toppings.push(
                {
                    id: element.id,
                    toppingValue: element.toppingValue
                }
            );
        })
        console.log(toppings);
        this._goodService.orderChart({
            companyId: this._companyId,
            name: "good",
            good: {
                "id": this.good.id,
                "count": this.count,
                "toppings": toppings

            }
        }).subscribe((data) => {
            this._router.navigate(['home/card'])
            console.log();

            console.log(data);

        })

    }

}