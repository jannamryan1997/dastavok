import { Component, OnInit } from "@angular/core"
import { ServerResponse, Paginator, BriefCompany } from "src/app/com/annaniks/dastavok/models/models";
import { InformationService } from "./information.service";

@Component({
    selector: "app-information",
    templateUrl: "information.view.html",
    styleUrls: ["information.view.scss"]
})

export class InformationView implements OnInit {
    public case: string;
    public companyItem: BriefCompany;
    public count: number;
    public pageLength: number = 10;
    constructor(private _informationService: InformationService) { }

    ngOnInit() {
        this._getRestaurant(1, this.pageLength);
    }


    private _getRestaurant(page, count) {

        this._informationService.getFreeclientRestaurant(page, count)
            .subscribe((data: ServerResponse<Paginator<BriefCompany>>) => {
                this.companyItem = data.data.data;
                this.count = data.data.metaData.count;
                console.log(data);

            })
    }

    public paginate(event) {
        console.log(event);
        this._getRestaurant(event.pageNumber, this.pageLength);

    }
}