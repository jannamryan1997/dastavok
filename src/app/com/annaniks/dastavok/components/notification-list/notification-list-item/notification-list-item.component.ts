import { Component, OnInit, Input } from "@angular/core"

@Component({
    selector: "app-notification-list-item",
    templateUrl: "notification-list-item.component.html",
    styleUrls: ["notification-list-item.component.scss"]
})

export class NotificationListItemComponent implements OnInit {
    @Input() label: string;
    @Input() data: string

    constructor() { }

    ngOnInit() { }
}