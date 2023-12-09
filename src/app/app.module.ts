import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VagasComponent } from './vagas/vagas.component';
import { PostarVagaComponent } from './postar-vaga/postar-vaga.component';


@NgModule({
  declarations: [
    AppComponent,
    VagasComponent,
    PostarVagaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
