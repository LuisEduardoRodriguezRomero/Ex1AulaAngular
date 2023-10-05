import { Component } from '@angular/core';
import { Carro } from '../carro';

@Component({
  selector: 'app-carroslist',
  templateUrl: './carroslist.component.html',
  styleUrls: ['./carroslist.component.scss']
})
export class CarroslistComponent {



  carrosList: Carro [] = []


  constructor(){


    let carro1: Carro = new Carro();

    carro1.nome = "KA";
    carro1.ano = 2022;

    let carro2: Carro = new Carro();

    carro2.nome = "Uno";
    carro2.ano = 2020;

    let carro3: Carro = new Carro();

    carro3.nome = "Prius"
    carro3.ano = 2021;


    this.carrosList.push(carro1);
    this.carrosList.push(carro2);
    this.carrosList.push(carro3);



  }
}
