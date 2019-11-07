import { Component, OnInit, OnDestroy } from "@angular/core"
import { MenuItemsService } from "../../../services";
import { SignUpService } from "../../../services/signUp.service";
import { Router, NavigationEnd, ActivatedRoute } from "@angular/router";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { FormControl } from "@angular/forms";

@Component({
    selector: "app-home",
    templateUrl: "home.view.html",
    styleUrls: ["home.view.scss"]
})
export class HomeView implements OnInit, OnDestroy {
    private _unsubscribe$: Subject<void> = new Subject<void>();
    public chooseBarVisiblity: boolean = true;
    public searchControl: FormControl = new FormControl();

    constructor(
        public menuItemsService: MenuItemsService,
        public signUpService: SignUpService,
        private _router: Router,
        private _activatedRoute: ActivatedRoute
    ) {
        this._checkSearchQuery();
    }

    ngOnInit() {
        this._handleSearchChanges();
        this._checkWindowSize();
    }

    private _checkSearchQuery(): void {
        this._activatedRoute.queryParams
            .pipe(takeUntil(this._unsubscribe$))
            .subscribe((params) => {
                if (params && params.search && this._router.url.includes('/search?search=')) {
                    this.searchControl.patchValue(params.search);
                }
                else {
                    this.searchControl.patchValue('');
                }
            })
    }

    private _checkWindowSize() {
        if (this._router.url != '/home/information' && window.innerWidth <= 900) {
            this._router.events.forEach((event) => {
                if (event instanceof NavigationEnd && event.url != '/home/information') {
                    this.chooseBarVisiblity = false;
                }
            })
        }
    }

    private _handleSearchChanges():void{
        this.searchControl.valueChanges.subscribe((value:string)=>{
            if(value.length === 0 && this._router.url.includes('/search?search=')){
                this.onClickSearch();
            }
        })
    }

    public onClickSearch(): void {
        this._router.navigate(['/search'], { queryParams: { search: this.searchControl.value } })
    }

    get isAuthorized(): boolean {
        return this.signUpService.isAuthorized;
    }

    ngOnDestroy() {
        this._unsubscribe$.next();
        this._unsubscribe$.complete();
    }

}