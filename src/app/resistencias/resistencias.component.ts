import { Component } from '@angular/core';

@Component({
  selector: 'app-resistencias',
  templateUrl: './resistencias.component.html',
  styleUrls: ['./resistencias.component.css']
})
export class ResistenciasComponent {
  color1!: string;
  color2!: string;
  color3!: string;
  tolerancia!: boolean;
  valor1!: string;
  valor2!: string;
  valor!: string;
  multiplicador!: number;
  resultado!: number;
  resultadoToleranciaMas!: number;
  resultadoToleranciaMenos!: number;
  listaColores: string[] = ["Negro", "Marrón", "Rojo", "Naranja", "Amarillo", "Verde", "Azul", "Violeta", "Gris", "Blanco"];
  colorList: string[] = ["black", "brown", "red", "orange", "yellow", "green", "blue", "purple", "gray", "white"];

  isWhiteText(color: string): boolean {
    const colorsWithWhiteText = ['black', 'brown', 'red', 'green', 'blue', 'purple', 'gray'];
  
    return colorsWithWhiteText.includes(color);
  }

  calcularResistencia() {
    switch(this.color1) {
      case "Negro": this.valor1 = "0"; this.color1 = "black"; break;
      case "Marrón": this.valor1 = "1"; this.color1 = "brown"; break;
      case "Rojo": this.valor1 = "2"; this.color1 = "red"; break;
      case "Naranja": this.valor1 = "3"; this.color1 = "orange"; break;
      case "Amarillo": this.valor1 = "4"; this.color1 = "yellow"; break;
      case "Verde": this.valor1 = "5"; this.color1 = "green"; break;
      case "Azul": this.valor1 = "6"; this.color1 = "blue"; break;
      case "Violeta": this.valor1 = "7"; this.color1 = "purple"; break;
      case "Gris": this.valor1 = "8"; this.color1 = "gray"; break;
      case "Blanco": this.valor1 = "9"; this.color1 = "white"; break;
    }

    switch(this.color2) {
      case "Negro": this.valor2 = "0"; this.color2 = "black"; break;
      case "Marrón": this.valor2 = "1"; this.color2 = "brown"; break;
      case "Rojo": this.valor2 = "2"; this.color2 = "red"; break;
      case "Naranja": this.valor2 = "3"; this.color2 = "orange"; break;
      case "Amarillo": this.valor2 = "4"; this.color2 = "yellow"; break;
      case "Verde": this.valor2 = "5"; this.color2 = "green"; break;
      case "Azul": this.valor2 = "6"; this.color2 = "blue"; break;
      case "Violeta": this.valor2 = "7"; this.color2 = "purple"; break;
      case "Gris": this.valor2 = "8"; this.color2 = "gray"; break;
      case "Blanco": this.valor2 = "9"; this.color2 = "white"; break;
    }
    
    switch(this.color3) {
      case "Negro": this.multiplicador = 1; this.color3 = "black"; break;
      case "Marrón": this.multiplicador = 10; this.color3 = "brown"; break;
      case "Rojo": this.multiplicador = 100; this.color3 = "red"; break;
      case "Naranja": this.multiplicador = 1000; ; this.color3 = "orange"; break;
      case "Amarillo": this.multiplicador = 10000; ; this.color3 = "yellow"; break;
      case "Verde": this.multiplicador = 100000; ; this.color3 = "green"; break;
      case "Azul": this.multiplicador = 1000000; ; this.color3 = "blue"; break;
      case "Violeta": this.multiplicador = 10000000; ; this.color3 = "purple"; break;
      case "Gris": this.multiplicador = 100000000; ; this.color3 = "gray"; break;
      case "Blanco": this.multiplicador = 1000000000; ; this.color3 = "white"; break;
    }

    this.valor = this.valor1 + this.valor2
    this.resultado = parseInt(this.valor) * this.multiplicador

    if(this.tolerancia) {
      this.resultadoToleranciaMas = this.resultado*1.05;
      this.resultadoToleranciaMenos = this.resultado*0.95;
    } else {
      this.resultadoToleranciaMas = Math.round(this.resultado*1.1)
      this.resultadoToleranciaMenos = this.resultado*0.9
    }
  }
}