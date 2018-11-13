import { Component, OnInit } from "@angular/core"
import { InformationService } from "../../views/main/home/information/information.service";
import { ServerResponse, Paginator, BriefCompany, MetaData } from "src/app/com/annaniks/dastavok/models/models";


@Component({
    selector: "app-paginator",
    templateUrl: "paginator.component.html",
    styleUrls: ["paginator.component.scss"]
})
export class PaginatorComponent implements OnInit {

    public item: number = 1;
    public pageLength: number = 25;
    public itemsCount: number = 26;
    public count: number;
    public pages: Array<number> = [];
    public page: number = 1;
    constructor(private _informationService: InformationService) { }

    ngOnInit() {
        this.paginatorCount();
    }

    public paginatorCount(): void {
        this.count = Math.floor(this.itemsCount / this.pageLength);
        if (this.itemsCount % this.pageLength > 0) {
            this.count = this.count + 1;

        }
        for (var i = 0; i < this.count; i++) {
            this.pages.push(i + 1)
        }

    }

    public onClickPage(index) {
        this.page = index + 1;
    }

}