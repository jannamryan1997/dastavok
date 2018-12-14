import { Component, OnInit, Inject } from "@angular/core"
import { Router, ActivatedRoute } from "@angular/router";
import { GoodService } from "./good.service";
import { Good, ServerResponse, Topping, BriefToppings, OrderInfo } from "src/app/com/annaniks/dastavok/models/models";
import { MatDialog } from "@angular/material"
import { RegistrationStep } from "src/app/com/annaniks/dastavok/modals";
import { SignUpService } from "src/app/com/annaniks/dastavok/services/signUp.service";

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
    public loading: boolean = false;

    constructor(@Inject('BASE_URL') private _baseUrl, private _router: Router, private _activatedRoute: ActivatedRoute, private _goodService: GoodService, private _dialog: MatDialog,
        private _signUpService: SignUpService) {
        this._activatedRoute.params.subscribe((params) => {
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
        let briefToppings: Array<BriefToppings> = [];
        this.toppings.forEach((element: Topping) => {
            briefToppings.push(
                {
                    id: element.id,
                    toppingValue: element.toppingValue
                }
            );
        })
        let orderInfo: OrderInfo = {
            orderType: 'one',
            companyId: this._companyId,
            good:
            {
                id: this._goodId,
                count: this.count,
                toppings: briefToppings
            }
        };
        this._router.navigate(['/payment'], { queryParams: { order: JSON.stringify(orderInfo) } })
    }

    private _getGood() {
        this.loading = true;
        this._goodService.getGood(this._goodId)
            .subscribe((data: ServerResponse<Good>) => {
                this.loading = false;
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



    private _openRegistrationModal(type: string): void {
        const dialogRef = this._dialog.open(RegistrationStep, {
            width: "686px",
            maxWidth: '100vw',
            panelClass: ['margin-10'],
        })
        dialogRef.afterClosed().subscribe((data) => {
            if (this._signUpService.isAuthorized) {
                if (type == "chart") {
                    this._orderChart();
                }
                if (type == 'buy') {
                    this._getGood();
                }
            }
        })

    }

    private _orderChart() {
        let briefToppings: Array<BriefToppings> = [];
        this.toppings.forEach((element: Topping) => {
            briefToppings.push(
                {
                    id: element.id,
                    toppingValue: element.toppingValue
                }
            );
        })
        this._goodService.orderChart({
            companyId: this._companyId,
            name: "good",
            good: {
                id: this.good.id,
                count: this.count,
                toppings: briefToppings

            }
        }).subscribe((data) => {
            this._router.navigate(['home/card'])
        })

    }
    public onClickOrder(type: string) {
        if (this._signUpService.isAuthorized == false) {
            this._openRegistrationModal(type);
        }
        else {
            if (type && type == "card") {
                this._orderChart();
            }
            if (type && type == "buy") {
                this._getGood();
            }
        }
    }


}