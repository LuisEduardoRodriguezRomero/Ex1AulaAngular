import { Component, Inject, inject } from '@angular/core';
import { Pessoa } from '../Pessoa';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-listpessoas',
  templateUrl: './listpessoas.component.html',
  styleUrls: ['./listpessoas.component.scss']
})
export class ListpessoasComponent {


  lista : Pessoa[] = [];




  modalService = inject(NgbModal);

  constructor(){

    let pessoa1: Pessoa = new Pessoa('Luis',27);
    let pessoa2: Pessoa = new Pessoa('Paola',25);
    let pessoa3: Pessoa = new Pessoa('Carlos',24);
    let pessoa4: Pessoa = new Pessoa('Junior',22);
    let pessoa5: Pessoa = new Pessoa('Jose',29);

    
    this.lista.push(pessoa1);
    this.lista.push(pessoa2);
    this.lista.push(pessoa3);
    this.lista.push(pessoa4);
    this.lista.push(pessoa5);
 

  }



  abrirModal(content: any){
    this.modalService.open(content, { size: 'lg' });
  }





  addNaLista(pessoa:Pessoa){

    this.lista.push(pessoa);
    this.modalService.dismissAll();
  }

}
