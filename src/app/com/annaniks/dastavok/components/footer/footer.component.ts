import { Component, OnInit } from "@angular/core"
import { Title } from "@angular/platform-browser";

@Component({
    selector: "app-footer",
    templateUrl: "footer.component.html",
    styleUrls: ["footer.component.scss"]
})

export class FooterComponent implements OnInit {

    public linksItem: Array<any> = [
        { title: "Home", qategorisTitle: "Shop", aboutTitle: "+216(0)40 4444 5757" },
        { title: "Contacts", qategorisTitle: "Restaurant" },
        { title: "Special", qategorisTitle: "All" }
    ]
    public aboutLink: Array<any> = [
        { icon:"call",aboutTitle: "+216(0)40 4444 5757" },
        { icon:"email",aboutTitle: "annaniks@Com" },
    ]
    constructor() { }

    ngOnInit() { }

}