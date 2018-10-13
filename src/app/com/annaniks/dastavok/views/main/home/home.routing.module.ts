import {NgModule} from "@angular/core"
import {RouterModule,Routes} from "@angular/router"
import { HomeComponent } from "./home.component";
const router:Routes=[
    {path:"",component:HomeComponent,children:[
        {path:"restaurant",loadChildren:"src/app/com/annaniks/dastavok/views/main/home/restaurant/restaurant.module#RestaurantModule"}
    ]
}
]
@NgModule({
    imports:[RouterModule.forChild(router)],
    exports:[RouterModule]
})
export class HomeRoutingModule{

}