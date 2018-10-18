import {NgModule} from "@angular/core"
import {RouterModule,Routes} from "@angular/router"
import { MainComponent } from "./main.view";
const router:Routes=[
    {path:"",component:MainComponent,children:[
        {path:"",redirectTo:"home",pathMatch:"full"},
        {path:"home",loadChildren:"src/app/com/annaniks/dastavok/views/main/home/home.module#HomeModule"},
        {path:"contact",loadChildren:"src/app/com/annaniks/dastavok/views/main/contact/contact.module#ContactModule"}
    ]
}
]
@NgModule({
    imports:[RouterModule.forChild(router)],
    exports:[RouterModule]
})

export class MainRoutingModule{
    
}