import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-skeletion-list-item',
    templateUrl: 'skeletion-list-item.component.html',
    styleUrls: ['skeletion-list-item.component.scss']
})
export class SkeletionListItemComponent {
    @Input('type') public skeletionType: string = 'goodType';

    constructor() { }
}