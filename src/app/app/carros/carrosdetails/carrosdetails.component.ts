import { Component, EventEmitter, Output, inject } from '@angular/core';
import { Carro } from '../carro';
import { ActivatedRoute } from '@angular/router';
import { EventManager } from '@angular/platform-browser';

@Component({
  selector: 'app-carrosdetails',
  templateUrl: './carrosdetails.component.html',
  styleUrls: ['./carrosdetails.component.scss']
})
export class CarrosdetailsComponent {



  router = inject(ActivatedRoute)
  carro: Carro = new Carro("",0);

  @Output() retorno = new EventEmitter<Carro>();


  constructor(){

    let id = this.router.snapshot.paramMap.get('id');

    
    console.log(id);
  
  }


  salvar(){

    this.retorno.emit(this.carro);
  }
  

}
