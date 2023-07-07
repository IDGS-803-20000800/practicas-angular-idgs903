import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { PizzeriaComponent } from './pizzeria.component';



@NgModule({
  declarations: [PizzeriaComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ], exports: [
    PizzeriaComponent
  ]
})
export class PizzeriaModule { }
