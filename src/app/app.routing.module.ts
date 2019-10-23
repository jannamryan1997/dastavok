import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router";
import { CheckToken } from "./com/annaniks/dastavok/guards/checkToken.service";

const router: Routes = [
    { path: "", loadChildren: () => import('./com/annaniks/dastavok/views/main/main.module').then(m => m.MainModule), canActivate: [CheckToken] }
]

@NgModule({
    imports: [RouterModule.forRoot(router)],
    exports: [RouterModule],
})

export class AppRoutingModule { }