import { Component } from '@angular/core';

@Component({
  selector: 'app-distancia-entre-puntos',
  templateUrl: './distancia-entre-puntos.component.html',
  styleUrls: ['./distancia-entre-puntos.component.css']
})
export class DistanciaEntrePuntosComponent {
  x1!: number;
  y1!: number;
  x2!: number;
  y2!: number;
  resultado: number=0;

  calcularDistancia(): void {
    this.resultado = Math.sqrt(Math.pow(this.x2-this.x1,2)+Math.pow(this.y2-this.y1,2));
  }
}
