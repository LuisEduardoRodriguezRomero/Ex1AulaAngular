import { Component } from '@angular/core';
import { Livros } from '../livros';

@Component({
  selector: 'app-livroslist',
  templateUrl: './livroslist.component.html',
  styleUrls: ['./livroslist.component.scss']
})
export class LivroslistComponent {




  livrosList : Livros[] = [];


  constructor(){

    let livro1: Livros = new Livros();
    livro1.titulo = 'O mochilero das galaxias';
    livro1.autor = "Douglas adams";

    let livro2: Livros = new Livros();
    livro2.titulo = "A historia do Louco";
    livro2.autor = "John Katzenbach";

   let livro3: Livros = new Livros();
    livro3.titulo = 'Jaque ao Analista';
    livro3.autor = "John Katzenbach";


    this.livrosList.push(livro1);
    this.livrosList.push(livro2);
    this.livrosList.push(livro3);


}


}