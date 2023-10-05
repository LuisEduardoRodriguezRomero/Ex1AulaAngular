import { Component, inject } from '@angular/core';
import { Carro } from '../carro';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-carrosdetails',
  templateUrl: './carrosdetails.component.html',
  styleUrls: ['./carrosdetails.component.scss']
})
export class CarrosdetailsComponent {



  router = inject(ActivatedRoute)
  carro!: Carro;


  constructor(){

    let id = this.router.snapshot.paramMap.get('id');

    
    console.log(id);
  
  }
  

}
