import { Component, OnInit, Inject, OnDestroy } from "@angular/core"
import { Router, ActivatedRoute } from "@angular/router";
import { GoodService } from "./product.service";
import { Good, ServerResponse, Topping, BriefToppings, OrderInfo } from "../../../../../models/models";
import { MatDialog } from "@angular/material"
import { RegistrationStep, MessagesModals } from "../../../../../modals";
import { SignUpService } from "../../../../../services/signUp.service";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { MessageService } from 'primeng/api';

@Component({
    selector: "product-view",
    templateUrl: "product.view.html",
    styleUrls: ["product.view.scss"]
})

export class ProductView implements OnInit, OnDestroy {
    private _goodId: number;
    public starCount: number = 4;
    public countSum: number = 1;
    public tab: number = 1;
    public activeImage: string;
    public goodImage: Array<string>;
    public good: Good;
    public toppings: Array<Topping>;
    public top: Array<any> = [];
    public reviewDataTime: string;
    public count: number = 0;
    public page: number = 1;
    public pageLength: number = 10;
    public loading: boolean = true;
    private _unsubcribe$: Subject<void> = new Subject<void>();

    constructor(
        private _router: Router,
        private _activatedRoute: ActivatedRoute,
        private _goodService: GoodService,
        private _dialog: MatDialog,
        private _signUpService: SignUpService,
        private _messageService: MessageService,
        @Inject('FILE_URL') public fileUrl: string,
        @Inject('COMPANY_ID') private _companyId: number
    ) {
        this._activatedRoute.params
            .pipe(takeUntil(this._unsubcribe$))
            .subscribe((params) => {
                this._goodId = Number(params.goodId);
            })
    }

    ngOnInit() {
        this._getGood();
        this._getReview();
    }

    public countIncrement(): void {
        this.countSum++;
    }

    public countDecrement(): void {
        if (this.countSum == 1) {
            return;
        }
        this.countSum--;
    }

    public setActiveImage(image): void {
        this.activeImage = this.fileUrl + image;
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
                count: this.countSum,
                toppings: briefToppings
            }
        };
        this._router.navigate(['/payment'], { queryParams: { order: JSON.stringify(orderInfo) } });

    }

    private _getGood(): void {
        this.loading = true;
        this._goodService.getGood(this._goodId)
            .pipe(takeUntil(this._unsubcribe$))
            .subscribe((data: ServerResponse<Good>) => {
                this.loading = false;
                this.good = data.data;
                this.toppings = data.data.toppings;
                this.toppings.forEach((element) => {
                    element.toppingValue = 0;
                })
                if (data.data.thumbnail) {
                    this.activeImage = this.fileUrl + data.data.thumbnail;
                }
                if (data.data.images) {
                    this.goodImage = data.data.images.split(",")
                    this.goodImage.unshift(data.data.thumbnail);
                }
            })
    }

    public changeTab(tab: number): void {
        this.tab = tab;
    }

    private _openMessageModal(type: string): void {
        const dialogRef = this._dialog.open(MessagesModals, {
            width: "686px",
            maxWidth: '100vw',
            panelClass: ['margin-10'],
        })
        dialogRef.afterClosed().subscribe((data) => {
            if (data) {
                this._openRegistrationStepModal();
            }
        })

    }

    private _orderChart(): void {
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
                count: this.countSum,
                toppings: briefToppings

            }
        }).subscribe((data) => {
            this._router.navigate(['/basket']);
            this._messageService.add({ severity: 'Сообщение', detail: 'Успешно добавлен в корзину' });

        })

    }
    public onClickOrder(type: string): void {
        if (this._signUpService.isAuthorized == false) {
            this._openMessageModal(type);
        }
        else {
            if (type && type == "card") {
                this._orderChart();
            }
            if (type && type == "buy") {
                this.onClickBuy();

            }
        }


    }
    private _openRegistrationStepModal(): void {
        const dialogRef = this._dialog.open(RegistrationStep, {
            width: "686px",
            maxWidth: '100vw',
            panelClass: ['margin-10'],
        })
    }

    private _getReview() {
        // // this._goodService.getReview(this._companyId, this._goodId, this.pageCount, this.pageLength)
        // this._goodService.getReview(1, 1, this.page, this.pageLength)
        //     .subscribe((data: ServerResponse<Review[]>) => {
        //         (data);

        //         //     this.reviewData = data.ddwqata.data;
        //         //   //this.pageCount = data.data.metaData.count;
        //         //     this.reviewDataTime=data.data.data.reviewDate;
        //         //     this.count=data.data.metaData.count;
        //         //     (this.reviewData);

        //     })
    }

    public paginate($event): void {
        this.page = $event.pageNumber;
        this._getReview();
    }

    ngOnDestroy() {
        this._unsubcribe$.next();
        this._unsubcribe$.complete();
    }

}