import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VagasComponent } from './vagas/vagas.component';
import { PostarVagaComponent } from './postar-vaga/postar-vaga.component';
import { CandidatoVagaComponent } from './candidato-vaga/candidato-vaga.component';
import { PerfilEmpresaComponent } from './perfil-empresa/perfil-empresa.component';


@NgModule({
  declarations: [
    AppComponent,
    VagasComponent,
    PostarVagaComponent,
    CandidatoVagaComponent,
    PerfilEmpresaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
