import { Component, OnInit } from "@angular/core"
import { SearchService } from "./search.service";
import { ActivatedRoute } from "@angular/router";
import { ServerResponse, Paginator, Good, BriefCompany } from "../../../../models/models";



@Component({
    selector: "app-search",
    templateUrl: "search.view.html",
    styleUrls: ["search.view.scss"]
})

export class SearchView implements OnInit {

    public goods: Good[];
    public companyItem: BriefCompany[];
    public page: number = 1;
    public pageLength: number = 10;
    public loading:boolean=false;

    ngOnInit() {
        this._checkQueryParams()
    }

    constructor(private _searchService: SearchService, private _activatedRoute: ActivatedRoute) { }


    private _checkQueryParams(): void {
        this._activatedRoute.queryParams.subscribe((params) => {
            console.log(params);
            this.companyItem = [];
            this._getSearchGoods(this.page, this.pageLength, params.search)
        
        })
    }

    private _getSearchGoods(page, limit, text) {
        this._searchService.getSearchGoods(page, limit, text)
            .subscribe((data: ServerResponse<Paginator<Good[]>>) => {
                this.loading=false;
                this.goods = data.data.data;

            })
        err => {
            console.log(err);

        }
    }
}