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
    constructor(private _informationService: InformationService) { }

    ngOnInit() {
        this._getRestaurant();
    }


    private _getRestaurant() {
      
        this._informationService.getFreeclientRestaurant(1, 10)
            .subscribe((data: ServerResponse<Paginator<BriefCompany>>) => {
                this.companyItem = data.data.data;
                console.log(data);

            })
    }
}