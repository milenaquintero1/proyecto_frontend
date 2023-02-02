import { Component } from '@angular/core';

export interface generalcollection {
  origen: string,
  codidi: string,
  cota: string,
  autor: string,
  enlaces: string,
  titulo: string
}

@Component({
  selector: 'app-coleccion',
  templateUrl: './coleccion.component.html',
  styleUrls: ['./coleccion.component.scss']
})
export class ColeccionComponent {

}
