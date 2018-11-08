import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "./com/annaniks/dastavok/guards/authguard.service";

const router: Routes = [
    { path: "", loadChildren: "./com/annaniks/dastavok/views/main/main.module#MainModule", canActivate: [AuthGuard] }
]

@NgModule({
    imports: [RouterModule.forRoot(router)],
    exports: [RouterModule],
})

export class AppRoutingModule { }