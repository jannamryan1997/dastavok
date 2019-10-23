import { Component, OnInit } from "@angular/core"
import { ServerResponse, Paginator, BriefCompany, Good } from "src/app/com/annaniks/dastavok/models/models";
import { InformationService } from "./information.service";
import { ActivatedRoute } from "@angular/router";



@Component({
    selector: "app-information",
    templateUrl: "information.view.html",
    styleUrls: ["information.view.scss"]
})

export class InformationView implements OnInit {
    public loading: boolean = false;
    public case: string;
    public companyItem: BriefCompany[];
    public goods: Good[];
    public count: number;
    public page: number = 1;
    public pageLength: number = 10;
    public params;

    constructor(private _informationService: InformationService, private _activatedRoute: ActivatedRoute) { }

    ngOnInit() {
        this._activatedRoute.queryParams
            .subscribe((data) => {
                this.params = data.type;
                this.companyItem=[]
                if (this.params == "company") {
                    this._getRestaurant(1, this.pageLength);
                }
                else if (this.params == "shop") {
                    this._getFreeclientStores(1, this.pageLength);
                }
          
                console.log(this.params);

            })
        // this._checkQueryParams();


    }


    private _getRestaurant(page, count) {
        this.loading = true;
        this._informationService.getFreeclientRestaurant(page, count)
            .subscribe((data: ServerResponse<Paginator<BriefCompany[]>>) => {
                this.loading = false;
                this.companyItem = data.data.data;
                this.count = data.data.metaData.count;
                console.log(data);

            })
        error => {
            console.log(error);

        }
    }

    private _getFreeclientStores(page, count) {
        this.loading = true;
        this._informationService.getFreeclientStores(page, count)
            .subscribe((data) => {
                console.log(data);

            });
        error => {
            console.log(error);

        }
    }

    public paginate(event) {
        this.loading = true;
        this._getRestaurant(event.pageNumber, this.pageLength);
        this._getFreeclientStores(event.pageNumber, this.pageLength);

    }


}