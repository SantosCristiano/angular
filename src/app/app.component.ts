import { Component, ViewContainerRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProductosService } from './servicio/productos.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

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

  constructor( private frmBuilder: FormBuilder, private ProductosService: ProductosService, private toastsManager: ToastsManager, vcr: ViewContainerRef ) {
    this.formulario = this.frmBuilder.group( {
      nombre: [ 'Nombre por defecto', Validators.required],
      apellido: [ 'Apellido por defecto', Validators.required],
      email: [ 'giraffas@gmail.com', [Validators.required, Validators.pattern("[^ @]*@[^ @]*") ]],
    });

    //console.log(JSON.stringify(ProductosService.productos));
    this.productos = ProductosService.productos.rows;

    this.toastsManager.setRootViewContainerRef(vcr);
  }

  onSubmit(parametro) {
    console.log(parametro);
  }

  eventoBotao() {
    console.log('Execução do evento indicando o controle');
  }

  operacion1() {
    this.toastsManager.success('Mensaje ', 'Titulo');
  }

  operacion2() {
    this.toastsManager.error('Mensaje ', 'Titulo');
  }

  operacion3() {
    this.toastsManager.warning('Mensaje ', 'Titulo');
  }

  operacion4() {
    this.toastsManager.info('Mensaje ', 'Titulo');
  }

  operacion5() {
    this.toastsManager.custom('<b>Customizado</b>');
  }
}
