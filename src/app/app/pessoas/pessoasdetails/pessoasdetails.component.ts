import { Component, EventEmitter, Output, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pessoa } from '../Pessoa';

@Component({
  selector: 'app-pessoasdetails',
  templateUrl: './pessoasdetails.component.html',
  styleUrls: ['./pessoasdetails.component.scss']
})
export class PessoasdetailsComponent {


  router = inject(ActivatedRoute);
  pessoa: Pessoa = new Pessoa("",0);

  @Output() retorno = new EventEmitter<Pessoa>();


  constructor(){

    let id = this.router.snapshot.paramMap.get('id');

    
    console.log(id);
  
  }
  

  salvar(){

    this.retorno.emit(this.pessoa);
  }

}
