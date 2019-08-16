import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProductosService } from './servicio/productos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  productos: any;
  formulario: FormGroup;
  title = 'codigoInterativo';
  titulo:any = 'Código Interativo!';
  dados:any = {Nome: "Cristiano", Apelido: "Santos", Idade: 23, Documento: "027788522-12"};

  informacion: any = [ { codigo:1, Nome: "Cristiano", Apelido: "Souza", Saldo: 1500 }, { codigo:1, Nome: "Jose", Apelido: "Amaral", Saldo: 1000 }, { codigo:1, Nome: "Luiz", Apelido: "Santos", Saldo: 500 }];

  constructor( private frmBuilder: FormBuilder, private ProductosService: ProductosService ) {
    this.formulario = this.frmBuilder.group( {
      nombre: [ 'Nombre por defecto', Validators.required],
      apellido: [ 'Apellido por defecto', Validators.required],
      email: [ 'giraffas@gmail.com', [Validators.required, Validators.pattern("[^ @]*@[^ @]*") ]],
    });


    //console.log(JSON.stringify(ProductosService.productos));
    this.productos = ProductosService.productos.rows;
  }

  onSubmit(parametro) {
    console.log(parametro);
  }

  eventoBotao() {
    console.log('Execução do evento indicando o controle');
  }
}
