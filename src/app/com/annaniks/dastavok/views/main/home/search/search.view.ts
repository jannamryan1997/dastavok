import { Component, OnInit, Inject, OnDestroy } from "@angular/core"
import { SearchService } from "./search.service";
import { ActivatedRoute, Router } from "@angular/router";
import { ServerResponse, Paginator, Good, BriefCompany } from "../../../../models/models";
import { takeUntil } from "rxjs/operators";
import { Subject } from "rxjs";

@Component({
    selector: "app-search",
    templateUrl: "search.view.html",
    styleUrls: ["search.view.scss"]
})
export class SearchView implements OnInit, OnDestroy {
    public goods: Good[] = [];
    public page: number = 1;
    public pageLength: number = 10;
    public loading: boolean = false;
    public count: number = 0;
    private _query: string = '';
    private _unsubscribe$: Subject<void> = new Subject<void>();

    ngOnInit() {
        this._checkQueryParams()
    }

    constructor(
        private _searchService: SearchService,
        private _activatedRoute: ActivatedRoute,
        private _router: Router,
        @Inject('COMPANY_ID') public companyId: string
    ) { }


    private _checkQueryParams(): void {
        this._activatedRoute.queryParams
            .pipe(takeUntil(this._unsubscribe$))
            .subscribe((params) => {
                this._query = params.search;
                this.page = params.page || 1;
                this._searchGoods(this.page, this.pageLength, params.search)
            })
    }

    private _searchGoods(page: number, limit: number, text: string): void {
        this.loading = true;
        this._searchService.getSearchGoods(page, this.companyId, limit, text)
            .pipe(takeUntil(this._unsubscribe$))
            .subscribe((data: ServerResponse<Paginator<{ goods: Good[] }>>) => {
                this.loading = false;
                this.goods = data.data.data.goods;
                this.count = data.data.metaData.count;
            })
    }

    public paginate($event): void {
        this.page = $event.pageNumber;
        this._router.navigate([], { relativeTo: this._activatedRoute, queryParams: { page: this.page }, queryParamsHandling: 'merge' })
    }

    ngOnDestroy() {
        this._unsubscribe$.next();
        this._unsubscribe$.complete();
    }
}