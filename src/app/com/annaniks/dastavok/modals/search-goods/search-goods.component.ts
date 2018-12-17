import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { MatDialogRef } from "@angular/material";

@Component({
    selector: "app-search-goods",
    templateUrl: "search-goods.component.html",
    styleUrls: ["search-goods.component.scss"]
})

export class SearchGoodsModals implements OnInit {

    public search: string;
    ngOnInit() { }

    constructor(private _router: Router, private _dialogRef: MatDialogRef<SearchGoodsModals>) { }

    public onClickSearch(): void {
        this._router.navigate(["home/search"], { queryParams: { search: this.search } })
        this._dialogRef.close();
    }

}