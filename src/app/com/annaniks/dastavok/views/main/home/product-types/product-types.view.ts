import { Component, OnInit, Inject } from "@angular/core"
import { ActivatedRoute, Router } from "@angular/router";
import { ProductTypesService } from "./product-types.service";
import { ServerResponse, GoodType, Restaurant } from "../../../../models/models";

@Component({
    selector: "app-product-types",
    templateUrl: "product-types.view.html",
    styleUrls: ["product-types.view.scss"]
})

export class ProductTypesView implements OnInit {
    public starCount: number = 4;
    public goodTypes: Array<GoodType> = [];
    public restaurant: Restaurant;
    public localImage: string = '/assets/images/restaurant.jpg';
    public loading: boolean = false;

    constructor(
        @Inject("BASE_URL") private _baseUrl: string,
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
            .subscribe((data: ServerResponse<Array<GoodType>>) => {
                this.loading = false;
                this.goodTypes = data.data;
            })
    }

    public onClickItem(goodType: GoodType) {
        this._router.navigate([`${goodType.id}/products`], { relativeTo: this._activatedRoute })
    }

    private _getRestaurant() {
        this._productTypesService.getRestaurantById(this.companyId)
            .subscribe((data: ServerResponse<Restaurant>) => {
                this.restaurant = data.data;
            })
    }

    private _setCompanyImage(): void {
        if (this.restaurant.image) {
            this.localImage = `${this._baseUrl}/static/company/` + this.restaurant.image;
        }
    }


}
