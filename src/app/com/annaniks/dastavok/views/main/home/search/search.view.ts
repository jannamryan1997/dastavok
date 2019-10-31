import { Component, OnInit, Inject } from "@angular/core"
import { SearchService } from "./search.service";
import { ActivatedRoute } from "@angular/router";
import { ServerResponse, Paginator, Good, BriefCompany } from "../../../../models/models";

@Component({
    selector: "app-search",
    templateUrl: "search.view.html",
    styleUrls: ["search.view.scss"]
})
export class SearchView implements OnInit {
    public goods: Good[] = [];
    public companyItem: BriefCompany[] = [];
    public page: number = 1;
    public pageLength: number = 10;
    public loading: boolean = false;
    public count: number = 30;
    private _query: string = '';

    ngOnInit() {
        this._checkQueryParams()
    }

    constructor(
        private _searchService: SearchService,
        private _activatedRoute: ActivatedRoute,
        @Inject('COMPANY_ID') private _companyId: string
    ) { }


    private _checkQueryParams(): void {
        this._activatedRoute.queryParams.subscribe((params) => {
            this.companyItem = [];
            this._query = params.search;
            this._searchGoods(this.page, this.pageLength, params.search)
        })
    }

    private _searchGoods(page, limit, text): void {
        this._searchService.getSearchGoods(page, this._companyId, limit, text)
            .subscribe((data: ServerResponse<Paginator<{ goods: Good[] }>>) => {
                this.loading = false;
                this.goods = data.data.data.goods;
                this.count = data.data.metaData.count;
            })
    }

    public paginate($event): void {
        this.page = $event.pageNumber;
        this._searchGoods(this.page, this.pageLength, this._query);
    }
}