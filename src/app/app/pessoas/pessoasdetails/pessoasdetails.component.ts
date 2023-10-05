import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pessoa } from '../Pessoa';

@Component({
  selector: 'app-pessoasdetails',
  templateUrl: './pessoasdetails.component.html',
  styleUrls: ['./pessoasdetails.component.scss']
})
export class PessoasdetailsComponent {


  router = inject(ActivatedRoute)
  pessoa!: Pessoa;


  constructor(){

    let id = this.router.snapshot.paramMap.get('id');

    
    console.log(id);
  
  }
  

}
