import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ProductosService } from './servicio/productos.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './principal/principal.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';
import { FilhoComponent } from './filho/filho.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormatoNomePipe } from './formato-nome.pipe';

import { Componente0Component } from './componente0/componente0.component';
import { Componente1Component } from './componente1/componente1.component';
import { Componente2Component } from './componente2/componente2.component';
import { ComponenteDetalleComponent } from './componente-detalle/componente-detalle.component';
import { Routes, RouterModule } from '@angular/router';
import { PersonaComponent } from './persona/persona.component';
import { PersonaService } from './servicio/persona.service';

import { HttpClientModule } from '@angular/common/http';

const routes:Routes = [
  { path:'', component: Componente0Component },
  { path:'componente1', component: Componente1Component },
  { path:'componente1/:id', component: Componente1Component },
  { path:'componente2', component: Componente2Component },
  { path:'componente2/:id/:titulo', component: Componente2Component },
  { path:'**', component: Componente0Component },
];

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    FilhoComponent,
    FormatoNomePipe,
    Componente0Component,
    Componente1Component,
    Componente2Component,
    ComponenteDetalleComponent,
    PersonaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [ProductosService,PersonaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
