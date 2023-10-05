import { Component } from '@angular/core';
import { Pessoa } from '../Pessoa';

@Component({
  selector: 'app-listpessoas',
  templateUrl: './listpessoas.component.html',
  styleUrls: ['./listpessoas.component.scss']
})
export class ListpessoasComponent {


  lista : Pessoa[] = [];


  constructor(){

    let pessoa1: Pessoa = new Pessoa();
    pessoa1.nome = 'Luis';
    pessoa1.idade = 27;

    let pessoa2: Pessoa = new Pessoa();
    pessoa2.nome = 'Paola';
    pessoa2.idade = 25;

    let pessoa3: Pessoa = new Pessoa();
    pessoa3.nome = 'Carlos';
    pessoa3.idade = 24;

    let pessoa4: Pessoa = new Pessoa();
    pessoa4.nome = 'Junior';
    pessoa4.idade = 22;

    let pessoa5: Pessoa = new Pessoa();
    pessoa5.nome = 'Jose';
    pessoa5.idade = 29;

    let pessoa6: Pessoa = new Pessoa();
    pessoa6.nome = 'Olga';
    pessoa6.idade = 25;

    let pessoa7: Pessoa = new Pessoa();
    pessoa7.nome = 'Ines';
    pessoa7.idade = 37;

    let pessoa8: Pessoa = new Pessoa();
    pessoa8.nome = 'Pedro';
    pessoa8.idade = 25;

    let pessoa9: Pessoa = new Pessoa();
    pessoa9.nome = 'Manolo';
    pessoa9.idade = 42;

    let pessoa10: Pessoa = new Pessoa();
    pessoa10.nome = 'Lucas';
    pessoa10.idade = 23;

    this.lista.push(pessoa1);
    this.lista.push(pessoa2);
    this.lista.push(pessoa3);
    this.lista.push(pessoa4);
    this.lista.push(pessoa5);
    this.lista.push(pessoa6);
    this.lista.push(pessoa7);
    this.lista.push(pessoa8);
    this.lista.push(pessoa9);
    this.lista.push(pessoa10);

  }

}
