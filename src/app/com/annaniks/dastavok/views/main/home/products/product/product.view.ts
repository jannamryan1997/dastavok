import { Component, OnInit, Inject } from "@angular/core"
import { Router, ActivatedRoute } from "@angular/router";
import { GoodService } from "./product.service";
import { Good, ServerResponse, Topping, BriefToppings, OrderInfo } from "../../../../../models/models";
import { MatDialog } from "@angular/material"
import { RegistrationStep } from "../../../../../modals";
import { SignUpService } from "../../../../../services/signUp.service";

@Component({
    selector: "product-view",
    templateUrl: "product.view.html",
    styleUrls: ["product.view.scss"]
})

export class ProductView implements OnInit {
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

    constructor(
        private _router: Router,
        private _activatedRoute: ActivatedRoute,
        private _goodService: GoodService,
        private _dialog: MatDialog,
        private _signUpService: SignUpService,
        @Inject('BASE_URL') private _baseUrl: string
    ) {
        this._activatedRoute.params.subscribe((params) => {
            this._companyId = +params.companyId;
            this._goodId = +params.good;
        })
    }

    ngOnInit() {
        this._getGood();
    }

    public openDescription(): void {
        this.tab = 1;
    }

    public openReview(): void {
        this.tab = 2;
    }

    public openIngredient(): void {
        this.tab = 3;
    }

    public countdAdd(): void {
        this.count++;
    }

    public countremove(): void {
        if (this.count == 1) {
            return;
        }
        this.count--;
    }

    public setActiveImage(image): void {
        this.activeImage = this._baseUrl + 'static/company/' + image;
    }

    public onClickBuy(): void {
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

    private _getGood(): void {
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
                    this.activeImage = this._baseUrl + 'static/company/' + data.data.thumbnail;
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