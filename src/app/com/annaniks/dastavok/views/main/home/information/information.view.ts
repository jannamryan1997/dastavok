import { Component, OnInit } from "@angular/core"


@Component({
    selector: "app-information",
    templateUrl: "information.view.html",
    styleUrls: ["information.view.scss"]
})

export class InformationView implements OnInit {
public case:string;
    constructor() { }

    ngOnInit() {
        this.case="1";
        this.case="2";
       
     }

    showTop(){
       
    }

    showunder(){
        
    }
}