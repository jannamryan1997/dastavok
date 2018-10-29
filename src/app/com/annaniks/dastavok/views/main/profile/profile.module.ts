import { NgModule} from "@angular/core"
import { ProfileView } from "./profile.view";
import { ProfileRoutingModule } from "./profile.routing.module";
import { CommonModule } from "@angular/common";
import { NotificationListItemComponent, NotificationListComponent } from "../../../components";

@NgModule({
    declarations: [ProfileView,NotificationListItemComponent,NotificationListComponent],
    imports: [ProfileRoutingModule,CommonModule],
    exports: []
})

export class ProfileModule  {

}