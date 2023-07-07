import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { CinepolisComponent } from "./cinepolis/cinepolis.component";
import { ResistenciasComponent } from "./resistencias/resistencias.component";
import { DistanciaEntrePuntosComponent } from "./distancia-entre-puntos/distancia-entre-puntos.component";
import { PizzeriaComponent } from "./pizzeria/pizzeria.component";

const routes: Routes = [
    {path: 'cinepolis', component: CinepolisComponent},
    {path: 'resistencias', component: ResistenciasComponent},
    {path: 'distancia', component: DistanciaEntrePuntosComponent},
    {path: 'pizzeria', component: PizzeriaComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}