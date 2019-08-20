import { Component, OnInit } from '@angular/core';
import { PersonaService } from '../servicio/persona.service';
@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.less']
})
export class PersonaComponent implements OnInit {

  agregarPersonaRegistro: any = { Nombre: '', Apellido: '', Edad: ''}
  personas: any;

  constructor(private personaService:PersonaService) { 
    this.obtenerPersonas();
  }

  obtenerPersonas() {
    this.personaService.obtenerTodasLasPersonas().subscribe( resultado => {
      this.personas = resultado.personas;
    },
    error => {
      console.log(JSON.stringify(error));
    });
  }

  ngOnInit() {
  }

  eliminarPersona(identificador) {
    console.log('evento eliminar');

    this.personaService.eliminarPersona(identificador).subscribe( resultado => {
      
    }, 
      error => {
        console.log(JSON.stringify(error));
    });
    
  }

  agregarPersona() {
    console.log('evento agregar');

    this.personaService.agregarPersona(this.agregarPersonaRegistro).subscribe( resultado => {
      this.obtenerPersonas();
    },
    error => {
      console.log(JSON.stringify(error));
    });
  }

}
