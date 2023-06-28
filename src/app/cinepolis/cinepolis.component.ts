import { Component } from '@angular/core';

@Component({
  selector: 'app-cinepolis',
  templateUrl: './cinepolis.component.html',
  styleUrls: ['./cinepolis.component.css']
})
export class CinepolisComponent {
  nombre!: string;
  compradores!: number;
  boletos!: number;
  tarjeta: boolean = false;
  efectivo!: number;

  calcularTotal() {
    let descuento: number = 0;
    let descuentoTarjeta: number = 0;
    if (this.boletos > this.compradores * 7) {
      alert("No se puede comprar más de 7 boletos por persona");
      this.boletos = 0;
      this.efectivo = 0;
    }
    else if (this.boletos <= 0) {
      alert("Debe comprar al menos un boleto");
      this.boletos = 0;
      this.efectivo = 0;
    } else {
      this.efectivo = this.boletos * 12;
    }

    if (this.boletos > 5) {
      descuento = this.efectivo * 0.15;
    } else if (this.boletos >= 3 && this.boletos <= 5) {
      descuento = this.efectivo * 0.1;
    }

    if (this.tarjeta) {
      descuentoTarjeta = this.efectivo * 0.1;
    }

    this.efectivo = Number((this.efectivo - descuento - descuentoTarjeta).toFixed(2));
  }
}