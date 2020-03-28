import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {
  n1: number;
  n2: number;
  c: number;
  op: string;


  constructor() { }

  ngOnInit(): void {
  }

  func(a: number, d: string, b: number) {
    d = this.op;
    a = this.n1;
    b = this.n2;


    // só realiza os calculos se existem dados em n1 para serem calculados
    if (a != null) {
      if (b != null) {
        // ver a estrutura de um switch case
        if (d === '+') {

          this.c = a + b;
          alert(this.c);
        }

        if (d === '/') {
          this.c = a / b;
          alert(this.c);
        }

        if (d === '-') {
          this.c = a - b;
          alert(this.c);
        }
        if (d === 'X') {
          this.c = a * b;
          alert(this.c);
        }
        if (d === 'x') {
          this.c = a * b;
          alert(this.c);
          // colocar duas condiçoes dentro do msm if  => (d === 'x' ou === 'X')
        }


      }
    }

  }

}
