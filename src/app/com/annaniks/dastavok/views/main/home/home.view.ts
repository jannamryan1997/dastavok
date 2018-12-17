import { Component, OnInit } from "@angular/core"
import { MenuItemsService } from "../../../services";
import { SignUpService } from "../../../services/signUp.service";
import { Router, NavigationEnd, ActivatedRoute } from "@angular/router";


@Component({
    selector: "app-home",
    templateUrl: "home.view.html",
    styleUrls: ["home.view.scss"]
})

export class HomeView implements OnInit {
    public chooseBarVisiblity: boolean = true;
    public search: string;

    constructor(public menuItemsService: MenuItemsService, public signUpService: SignUpService, private _router: Router, private _activatedRoute: ActivatedRoute) { }

    ngOnInit() {
        this._checkWindowSize();
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

    public onClickSearch(): void {
        this._router.navigate(['/home/search'], { queryParams: { search: this.search } })

    }

}