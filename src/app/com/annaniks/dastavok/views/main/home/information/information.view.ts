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
    public loading:boolean=false;
    public case: string;
    public companyItem: BriefCompany[];
    public goods:Good[];
    public count: number;
    public page: number = 1;
    public pageLength: number = 10;
    constructor(private _informationService: InformationService, private _activatedRoute: ActivatedRoute) { }

    ngOnInit() {
       // this._checkQueryParams();
        this._getRestaurant(1, this.pageLength);
    }


    private _getRestaurant(page, count) {
        this.loading=true;
        this._informationService.getFreeclientRestaurant(page, count)
            .subscribe((data: ServerResponse<Paginator<BriefCompany[]>>) => {
                this.loading=false;
                this.companyItem = data.data.data;
                this.count = data.data.metaData.count;
                console.log(data);
                
            })
            error=>{     
                console.log(error);
                
            }
    }

    public paginate(event) {
        this.loading=true;
        this._getRestaurant(event.pageNumber, this.pageLength);

    }
}