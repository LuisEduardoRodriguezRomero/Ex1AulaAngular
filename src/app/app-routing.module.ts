import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './app/layout/index/index.component';
import { LoginComponent } from './app/sistema/login/login.component';
import { ListpessoasComponent } from './app/pessoas/listpessoas/listpessoas.component';
import { LivroslistComponent } from './app/livros/livroslist/livroslist.component';
import { CarroslistComponent } from './app/carros/carroslist/carroslist.component';
import { PessoasdetailsComponent } from './app/pessoas/pessoasdetails/pessoasdetails.component';
import { LivrosdetailsComponent } from './app/livros/livrosdetails/livrosdetails.component';
import { CarrosdetailsComponent } from './app/carros/carrosdetails/carrosdetails.component';

const routes: Routes = [
  {path:"", redirectTo:"login", pathMatch: "full"},
  {path:"login", component: LoginComponent},
  {path:"admin", component: IndexComponent,children:[
       {path:"pessoas", component: ListpessoasComponent},
       {path:"pessoas/details", component: PessoasdetailsComponent},
       {path:"livros", component: LivroslistComponent},
       {path:"livros/details", component: LivrosdetailsComponent},
       {path:"carros", component: CarroslistComponent},
       {path:"carros/details/:id", component: CarrosdetailsComponent}

  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
