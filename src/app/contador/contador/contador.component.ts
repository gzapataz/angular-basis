import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  template: `
          <h1>{{title}}</h1>
          <h1>La base es: {{ base }}</h1>
          <button (click)=" acumular( base );  ">+ {{ base }}</button>
          <span>{{ counter }}</span>
          <button (click)=" acumular(-base);; ">- {{ base }}</button>
  `
})
export class ContadorComponent {
      title: string = 'Contador App';
      counter: number = 10;
      base: number = 5;

      acumular(valor: number): number {
        return this.counter += valor;
      }
}
