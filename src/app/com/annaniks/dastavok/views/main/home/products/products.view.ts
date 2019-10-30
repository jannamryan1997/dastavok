import { Component, OnInit, Inject } from "@angular/core"
import { ActivatedRoute } from "@angular/router";
import { Good, ServerResponse, Paginator } from "./../../../../models/models";
import { ProductsService } from "./products.service";

@Component({
    selector: "app-products",
    templateUrl: "products.view.html",
    styleUrls: ["products.view.scss"]
})

export class ProductsView implements OnInit {
    private _goodTypeId: number;
    public pageLength: number = 10;
    public goodsInfo: Array<Good> = [];
    public count: number;
    public goodsImage: string;
    public loading: boolean = false;

    constructor(
        @Inject("COMPANY_ID") private _companyId: number,
        private activatedRoute: ActivatedRoute,
        private _productsService: ProductsService
    ) {
        this.activatedRoute.params.subscribe((params) => {
            this._goodTypeId = params.goodTypeId;
        })
    }
    ngOnInit() {
        this._getGoods(this._companyId, this._goodTypeId, 1, this.pageLength);
    }

    private _getGoods(companyId: number, goodTypeId: number, page, count): void {
        this.loading = true;
        this._productsService.getGoods(companyId, goodTypeId, page, count)
            .subscribe((data: ServerResponse<Paginator<Array<Good>>>) => {
                console.log(data);
                this.loading = false;
                this.goodsInfo = data.data.data;
                this.count = data.data.metaData.count;
            })
    }

    public paginate($event): void {
        this._getGoods(this._companyId, this._goodTypeId, $event.pageNumber, this.pageLength);
    }
}