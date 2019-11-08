import { Component, OnInit, Inject, OnDestroy } from "@angular/core"
import { ActivatedRoute, Router } from "@angular/router";
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
    public page: number = 1;
    private _unsubscribe$: Subject<void> = new Subject<void>();

    constructor(
        @Inject("COMPANY_ID") private _companyId: number,
        @Inject("ADMIN_FILE_URL") public fileUrl: string,
        private _activatedRoute: ActivatedRoute,
        private _productsService: ProductsService,
        private _router: Router
    ) {
        this._checkRouteParams();
    }

    ngOnInit() { }

    private _checkRouteParams(): void {
        this._goodTypeId = +this._activatedRoute.snapshot.paramMap.get('goodTypeId');
        this._activatedRoute.queryParams
            .pipe(takeUntil(this._unsubscribe$))
            .subscribe((params) => {
                this.page = params.page || 1;
                this._getGoods(this._companyId, this._goodTypeId, this.page, this.pageLength);
            })
    }

    private _getGoods(companyId: number, goodTypeId: number, page: number, count: number): void {
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
        this._router.navigate([], { relativeTo: this._activatedRoute, queryParams: { page: $event.pageNumber } })
    }

    ngOnDestroy() {
        this._unsubscribe$.next();
        this._unsubscribe$.complete();
    }
}