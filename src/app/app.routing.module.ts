import {NgModule} from "@angular/core"
import {RouterModule,Routes} from "@angular/router";
const router:Routes=[
    {path:"",loadChildren:"./com/annaniks/dastavok/views/main/main.module#MainModule"}
]
@NgModule({
    imports:[RouterModule.forRoot(router)],
    exports:[RouterModule],
})

export class AppRoutingModule{

}