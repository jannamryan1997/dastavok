import { Component, OnInit, Input } from "@angular/core"
import { BriefCompany } from "../../../models/models";

@Component({
    selector: "app-company-list-item",
    templateUrl: "company-list-item.component.html",
    styleUrls: ["company-list-item.component.scss"]
})

export class CompanyListItemComponent implements OnInit {
    @Input() companyItem: BriefCompany;
    public starCount: number = 4;
    public localImage: string = '/assets/images/restaurant.jpg';


    constructor() { }

    ngOnInit() {
        this._setCompanyImage();
    }

    private _setCompanyImage(): void {
        if (this.companyItem.image) {
            this.localImage = 'http://192.168.0.114:4000/static/company/'+this.companyItem.image;
        }
    }
}