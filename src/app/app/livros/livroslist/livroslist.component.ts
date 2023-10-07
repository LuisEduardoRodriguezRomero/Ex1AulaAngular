import { Component, inject } from '@angular/core';
import { Livros } from '../livros';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-livroslist',
  templateUrl: './livroslist.component.html',
  styleUrls: ['./livroslist.component.scss']
})
export class LivroslistComponent {


  modalService = inject(NgbModal)

  livrosList : Livros[] = [];


  constructor(){

    let livro1: Livros = new Livros("O mochilero das galaxias","Douglas adams");
  
    let livro2: Livros = new Livros("A historia do Louco","John Katzenbach");
  
   let livro3: Livros = new Livros("Jaque ao Analista","John Katzenbach");

    this.livrosList.push(livro1);
    this.livrosList.push(livro2);
    this.livrosList.push(livro3);


}


abrirModal(content: any){

  this.modalService.open(content,{ size: 'lg'});

}

addNaLista(livro:Livros){

  this.livrosList.push(livro);
  this.modalService.dismissAll();
}


}