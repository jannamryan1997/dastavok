import { Component, OnInit, OnDestroy } from "@angular/core"
import { Options } from "ng5-slider";
import { FormGroup, FormBuilder, FormControl, FormArray } from "@angular/forms";
import { Subscription } from "rxjs";
import { Router } from "@angular/router";
import { MenuService } from "../../services/menu.service";
import { MainService } from "../../views/main/main.service";
import { map } from "rxjs/operators";

@Component({
    selector: "app-filters-list",
    templateUrl: "filters-list.component.html",
    styleUrls: ["filters-list.component.scss"]
})

export class FiltersListComponent implements OnInit, OnDestroy {
    private _changeSubscription: Subscription = new Subscription();
    public highValue: number = 10000
    public options: Options = {
        floor: 0,
        ceil: 10000,
        showTicks: false
    };
    private _filterForm: FormGroup;

    constructor(
        private _fb: FormBuilder,
        private _router: Router,
        private _menuService: MenuService,
        private _mainService: MainService
    ) { }

    ngOnInit() {
        this._formBuilder();
    }

    private _formBuilder(): void {
        this._filterForm = this._fb.group({
            priceGroup: this._fb.group({
                price: [[0, this.highValue]],
                startPrice: [0],
                endPrice: [this.highValue],
            }),
            filters: this._fb.array([
                new FormControl(),
                new FormControl(),
                new FormControl(),
                new FormControl(),
            ])
        })

        this.priceGroup.get('price').valueChanges.subscribe((value) => {
            if (value) {
                this.priceGroup.get('startPrice').setValue(value[0], { emitEvent: false })
                this.priceGroup.get('endPrice').setValue(value[1], { emitEvent: false })
            }
            else {
                this.priceGroup.get('startPrice').setValue(0, { emitEvent: false })
                this.priceGroup.get('endPrice').setValue(this.highValue, { emitEvent: false })
            }
        })
        this.priceGroup.get('startPrice').valueChanges.subscribe((value) => {
            this.priceGroup.get('price').setValue([value, this.priceGroup.get('endPrice').value], { emitEvent: false });
        })
        this.priceGroup.get('endPrice').valueChanges.subscribe((value) => {
            this.priceGroup.get('price').setValue([this.priceGroup.get('startPrice').value, value], { emitEvent: false });
        })
    }

    private _searchFilters(query: string) {
        return this._mainService.searchFilters(query)
    }

    public onClickFilter(): void {
        this._router.navigate(['/search', { queryParams: { search: '' } }])
    }

    public onClickClearFilters(): void {
        this.priceGroup.get('price').setValue([0, this.highValue], { emitEvent: false });
        this.priceGroup.get('startPrice').setValue(0, { emitEvent: false });
        this.priceGroup.get('endPrice').setValue(this.highValue, { emitEvent: false });
        this._filterForm.get('filters').reset();
    }

    public search($event): void {
        this._searchFilters($event.query).subscribe((data) => {
            console.log(data);
        })
    }


    get filterForm(): FormGroup {
        return this._filterForm;
    }

    get priceGroup(): FormGroup {
        return this._filterForm.get('priceGroup') as FormGroup;
    }

    get filterControls(): FormArray {
        return this._filterForm.get('filters') as FormArray
    }

    get isFilterOpen(): boolean {
        return this._menuService.isOpenFilter;
    }

    ngOnDestroy() {
        this._changeSubscription.unsubscribe();
    }
}