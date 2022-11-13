import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {
  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor'];
  heroeBorrado: string = '';

  borrarHeroe(ind: number): void {
    console.log('Borrando....', this.heroes.at(ind));
    this.heroeBorrado = this.heroes.at(ind) || '';
    this.heroes.splice(ind, 1);
  }
}
