import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Livros } from '../livros';

@Component({
  selector: 'app-livrosdetails',
  templateUrl: './livrosdetails.component.html',
  styleUrls: ['./livrosdetails.component.scss']
})
export class LivrosdetailsComponent {


  router = inject(ActivatedRoute)
  livro!: Livros;


  constructor(){

    let id = this.router.snapshot.paramMap.get('id');

    
    console.log(id);
  
  }

}
