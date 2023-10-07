import { Component, EventEmitter, Output, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Livros } from '../livros';
import { eventListeners } from '@popperjs/core';

@Component({
  selector: 'app-livrosdetails',
  templateUrl: './livrosdetails.component.html',
  styleUrls: ['./livrosdetails.component.scss']
})
export class LivrosdetailsComponent {


  router = inject(ActivatedRoute)
  livro: Livros = new Livros("","");

  @Output() retorno = new EventEmitter<Livros>();


  constructor(){

    let id = this.router.snapshot.paramMap.get('id');

    
    console.log(id);
  
  }




  salvar(){

    this.retorno.emit(this.livro);

  }

}
