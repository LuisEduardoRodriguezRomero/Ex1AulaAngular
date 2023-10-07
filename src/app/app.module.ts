import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './app/layout/index/index.component';
import { ListpessoasComponent } from './app/pessoas/listpessoas/listpessoas.component';
import { FooterComponent } from './app/layout/footer/footer.component';
import { HeaderComponent } from './app/layout/header/header.component';
import { LoginComponent } from './app/sistema/login/login.component';
import { CarroslistComponent } from './app/carros/carroslist/carroslist.component';
import { LivroslistComponent } from './app/livros/livroslist/livroslist.component';
import { LivrosdetailsComponent } from './app/livros/livrosdetails/livrosdetails.component';
import { CarrosdetailsComponent } from './app/carros/carrosdetails/carrosdetails.component';
import { PessoasdetailsComponent } from './app/pessoas/pessoasdetails/pessoasdetails.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    ListpessoasComponent,
    FooterComponent,
    HeaderComponent,
    LoginComponent,
    CarroslistComponent,
    LivroslistComponent,
    LivrosdetailsComponent,
    CarrosdetailsComponent,
    PessoasdetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
