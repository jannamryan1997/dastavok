import {NgModule} from "@angular/core"
import {RouterModule,Routes} from "@angular/router"
import { HomeView } from "./home.view";


const router:Routes=[
    {path:"",component:HomeView,children:[
        {path:"restaurant",loadChildren:"src/app/com/annaniks/dastavok/views/main/home/restaurant/restaurant.module#RestaurantModule"},
        {path:"information",loadChildren:"src/app/com/annaniks/dastavok/views/main/home/information/information.module#InformationModule"}
    ]
}
]
@NgModule({
    imports:[RouterModule.forChild(router)],
    exports:[RouterModule]
})
export class HomeRoutingModule{

}