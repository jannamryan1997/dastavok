import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router";
import { CheckToken } from "./com/annaniks/dastavok/guards/checkToken.service";

const router: Routes = [
    { path: "", loadChildren: "./com/annaniks/dastavok/views/main/main.module#MainModule", canActivate: [CheckToken] }
]

@NgModule({
    imports: [RouterModule.forRoot(router, { initialNavigation: "enabled" })],
    exports: [RouterModule],
})

export class AppRoutingModule { }