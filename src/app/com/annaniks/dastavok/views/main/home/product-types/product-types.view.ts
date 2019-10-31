import { Component, OnInit, Inject, OnDestroy } from "@angular/core"
import { ActivatedRoute, Router } from "@angular/router";
import { ProductTypesService } from "./product-types.service";
import { ServerResponse, GoodType, Restaurant } from "../../../../models/models";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";

@Component({
    selector: "app-product-types",
    templateUrl: "product-types.view.html",
    styleUrls: ["product-types.view.scss"]
})

export class ProductTypesView implements OnInit, OnDestroy {
    public starCount: number = 4;
    public goodTypes: Array<GoodType> = [];
    public restaurant: Restaurant;
    public localImage: string = '/assets/images/restaurant.jpg';
    public loading: boolean = false;
    private _unsubscribe$: Subject<void> = new Subject<void>();

    constructor(
        @Inject("FILE_URL") private _fileUrl: string,
        @Inject("COMPANY_ID") public companyId: number,
        private _router: Router,
        private _activatedRoute: ActivatedRoute,
        private _productTypesService: ProductTypesService
    ) { }

    ngOnInit() {
        this._getGoodTypes(this.companyId);
        this._getRestaurant();
    }

    private _getGoodTypes(companyId: number): void {
        this.loading = true;
        this._productTypesService.getGoodTypes(companyId)
            .pipe(takeUntil(this._unsubscribe$))
            .subscribe((data: ServerResponse<Array<GoodType>>) => {
                this.loading = false;
                this.goodTypes = data.data;
            })
    }

    public onClickItem(goodType: GoodType) {
        this._router.navigate([`${goodType.id}/products`], { relativeTo: this._activatedRoute })
    }

    private _getRestaurant(): void {
        this._productTypesService.getRestaurantById(this.companyId)
            .pipe(takeUntil(this._unsubscribe$))
            .subscribe((data: ServerResponse<Restaurant>) => {
                this.restaurant = data.data;
            })
    }

    ngOnDestroy() {
        this._unsubscribe$.next();
        this._unsubscribe$.complete();
    }


}
