import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IPizzas } from './pizza';
import { IClientes } from './cliente';

@Component({
  selector: 'app-pizzeria',
  templateUrl: './pizzeria.component.html',
  styleUrls: ['./pizzeria.component.css']
})

export class PizzeriaComponent {
  pizzeriaForm!: FormGroup;
  totalDePizzas = 0;

  pizzas: IPizzas[] = [];
  clientes: IClientes[] = [];

  constructor(private readonly fb: FormBuilder) {
    this.pizzeriaForm = this.initForm();
  }

  initForm(): FormGroup {
    return this.fb.group({
      nombre: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]+$')]],
      direccion: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9 ]+$')]],
      telefono: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern('^[0-9]+$')]],
      tamanio: ['', [Validators.required]],
      ingredientes: this.fb.group({
        jamon: [false],
        pinia: [false],
        champiniones: [false]
      }),
      cantidad: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
    });
  }

  onSubmit(): void {
    if (this.pizzeriaForm.valid) {
      this.obtenerPizza();
    } else {
      alert('Complete todos los campos correctamente');
    }
  }

  obtenerPizza(): void {
    const tam = this.pizzeriaForm.get('tamanio')?.value;
    const ing = this.pizzeriaForm.get('ingredientes')?.value;
    const can = this.pizzeriaForm.get('cantidad')?.value;

    let sub = 0;
    let ingredientes = 'Queso, ';
    switch (tam) {
      case 'Chica':
        sub = 40;
        break;
      case 'Mediana':
        sub = 80;
        break;
      case 'Grande':
        sub = 120;
        break;
    }

    if (ing.jamon) {
      sub += 10;
      ingredientes += 'Jamón, ';
    }
    if (ing.pinia) {
      sub += 10;
      ingredientes += 'Piña, ';
    }
    if (ing.champiniones) {
      sub += 10;
      ingredientes += 'Champiñones, ';
    }

    sub *= can;

    const pizza = {
      tamanio: tam,
      ingredientes: ingredientes.slice(0, -2),
      cantidad: can,
      subtotal: sub
    };

    this.pizzas.push(pizza);

  }

  obtenerCliente(): void {
    const nom = this.pizzeriaForm.get('nombre')?.value;
    const dir = this.pizzeriaForm.get('direccion')?.value;
    const tel = this.pizzeriaForm.get('telefono')?.value;

    let tot = 0;
    this.pizzas.forEach(pizza => {
      tot += pizza.subtotal;
    });

    const cliente = {
      nombre: nom,
      direccion: dir,
      telefono: tel,
      total: tot
    };

    this.totalDePizzas += tot;

    this.clientes.push(cliente);
  }

  deletePizza(index: number): void {
    this.pizzas.splice(index, 1);
  }

  confirmar(): void {
    if(window.confirm('¿Desea terminar su pedido?')){
      this.obtenerCliente();
      this.pizzas = [];
    }
  }
}