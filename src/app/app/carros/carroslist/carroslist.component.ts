import { Component, inject } from '@angular/core';
import { Carro } from '../carro';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carroslist',
  templateUrl: './carroslist.component.html',
  styleUrls: ['./carroslist.component.scss']
})
export class CarroslistComponent {


  modalService = inject(NgbModal);

  carrosList: Carro [] = []


  constructor(){


    let carro1: Carro = new Carro("KA",2022);

    let carro2: Carro = new Carro("Uno",2020);

    let carro3: Carro = new Carro("Prius",2021);


    this.carrosList.push(carro1);
    this.carrosList.push(carro2);
    this.carrosList.push(carro3);

  }


  abrirModal(content:any){

    this.modalService.open(content, {size: 'lg'})

  }


  addNaLista(carro: Carro){

    this.carrosList.push(carro);
    this.modalService.dismissAll();
  }



}
