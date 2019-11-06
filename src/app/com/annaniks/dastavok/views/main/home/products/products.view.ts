import { Component, OnInit, Inject, OnDestroy } from "@angular/core"
import { ActivatedRoute } from "@angular/router";
import { Good, ServerResponse, Paginator, GoodsResponse } from "src/app/com/annaniks/dastavok/models/models";
import { ProductsService } from "./products.service";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";

@Component({
    selector: "app-products",
    templateUrl: "products.view.html",
    styleUrls: ["products.view.scss"]
})

export class ProductsView implements OnInit, OnDestroy {
    private _goodTypeId: number;
    public pageLength: number = 9;
    public goodsInfo: Array<Good> = [];
    public count: number;
    public goodTypeImage: string = '';
    public loading: boolean = false;
    private _unsubscribe$: Subject<void> = new Subject<void>();

    constructor(
        @Inject("COMPANY_ID") private _companyId: number,
        @Inject("ADMIN_FILE_URL") public fileUrl: string,
        private activatedRoute: ActivatedRoute,
        private _productsService: ProductsService
    ) {
        this.activatedRoute.params.subscribe((params) => {
            this._goodTypeId = params.goodTypeId;
        })
    }

    ngOnInit() {
        this._getGoods(this._companyId, this._goodTypeId, 1, this.pageLength);
        console.log(this.pageLength);
        
    }

    private _getGoods(companyId: number, goodTypeId: number, page, count): void {
        this.loading = true;
        this._productsService.getGoods(companyId, goodTypeId, page, count)
            .pipe(takeUntil(this._unsubscribe$))
            .subscribe((data: ServerResponse<Paginator<GoodsResponse>>) => {
                this.loading = false;
                this.goodsInfo = data.data.data.goods;
                this.count = data.data.metaData.count;
                this.goodTypeImage = `${this.fileUrl}${data.data.data.goodType.image}`
            })
    }

    public paginate($event): void {
        this._getGoods(this._companyId, this._goodTypeId, $event.pageNumber, this.pageLength);
    }

    ngOnDestroy() {
        this._unsubscribe$.next();
        this._unsubscribe$.complete();
    }
}