import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { MatDialogRef } from "@angular/material";
import { FormControl } from "@angular/forms";

@Component({
    selector: "app-search-goods",
    templateUrl: "search-goods.modal.html",
    styleUrls: ["search-goods.modal.scss"]
})

export class SearchGoodsModals implements OnInit {

    public searchControl: FormControl = new FormControl('');

    ngOnInit() { }

    constructor(private _router: Router, private _dialogRef: MatDialogRef<SearchGoodsModals>) { }

    public onClickSearch(): void {
        this._router.navigate(["/search"], { queryParams: { search: this.searchControl.value } })
        this._dialogRef.close();
    }

}