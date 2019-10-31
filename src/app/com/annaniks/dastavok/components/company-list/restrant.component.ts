import {Component} from "@angular/core"

@Component({
    selector:"app-company-list",
    template:`<div display-flex full-width flex-wrap-wrap class="container">
    <ng-content></ng-content>
</div>`
})

export class CompanyListComponent{
    
}