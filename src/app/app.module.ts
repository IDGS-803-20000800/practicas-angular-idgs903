import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DistanciaEntrePuntosModule } from "./distancia-entre-puntos/distancia-entre-puntos.module";
import { CinepolisModule } from './cinepolis/cinepolis.module';
import { ResistenciasModule } from './resistencias/resistencias.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './menu/menu.component';
import { AppRoutingModule } from './app.routing.module';

@NgModule({
    declarations: [
        AppComponent,
        MenuComponent
    ],
    imports: [
        BrowserModule,
        DistanciaEntrePuntosModule,
        CinepolisModule,
        ResistenciasModule,
        BrowserAnimationsModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
