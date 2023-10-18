import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServicoComponent } from './servico/servico.component';
import { FormsModule } from '@angular/forms';
import { PaiComponent } from './pai/pai.component';
import { FilhoComponent } from './filho/filho.component';
import { ComponentePersonalizadoComponent } from './componente-personalizado/componente-personalizado.component';
import { Servico2Component } from './servico2/servico2.component';

@NgModule({
  declarations: [
    AppComponent,
    ServicoComponent,
    PaiComponent,
    FilhoComponent,
    ComponentePersonalizadoComponent,
    Servico2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
