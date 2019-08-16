import { Component, OnInit } from '@angular/core';
import { PersonaService } from '../servicio/persona.service';
@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.less']
})
export class PersonaComponent implements OnInit {

  agregarPersonaRegistro: any = { Nombre: '', Apellido: '', Edad: ''}
  persona: any;

  constructor(private personaService:PersonaService) { }

  ngOnInit() {
  }

  eliminarPersona(identificador) {
    console.log('evento eliminar');
  }

  agregarPersona() {
    console.log('evento agregar');
  }

}
