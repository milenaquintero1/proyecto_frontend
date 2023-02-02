import { Injectable } from '@angular/core';
import { generalcollection } from './../coleccion/coleccion.component';

@Injectable({
  providedIn: 'root'
})
export class GeneralCollectionService {

  listgeneralcollection: generalcollection[] = [
    {
      origen: 'MILENA Q',
      codidi: 'MILENA Q',
      cota: 'MILENA Q',
      autor: 'MILENA Q',
      enlaces: 'MILENA Q',
      titulo: 'MILENA Q'
    },
    {
      origen: 'MILENA Q',
      codidi: 'MILENA Q',
      cota: 'MILENA Q',
      autor: 'MILENA Q',
      enlaces: 'MILENA Q',
      titulo: 'MILENA Q'
    },
    {
      origen: 'MILENA Q',
      codidi: 'MILENA Q',
      cota: 'MILENA Q',
      autor: 'MILENA Q',
      enlaces: 'MILENA Q',
      titulo: 'MILENA Q'
    },
    {
      origen: 'MILENA Q',
      codidi: 'MILENA Q',
      cota: 'MILENA Q',
      autor: 'MILENA Q',
      enlaces: 'MILENA Q',
      titulo: 'MILENA Q'
    }
  ];
  

  constructor() { }

  getData() {
    return this.listgeneralcollection.slice();
  }

  cargarData(){
    return this.listgeneralcollection.slice();
  }

  addData(g: generalcollection) {
    this.listgeneralcollection.push(g);
  }


  eliminarInformacion(index: number){
    this.listgeneralcollection.splice(index, 1);
  }
  
}
