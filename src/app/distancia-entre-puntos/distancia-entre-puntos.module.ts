import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DistanciaEntrePuntosComponent } from './distancia-entre-puntos.component';



@NgModule({
  declarations: [DistanciaEntrePuntosComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    DistanciaEntrePuntosComponent
  ]
})
export class DistanciaEntrePuntosModule { }
