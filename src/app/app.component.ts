import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'codigoInterativo';
  titulo:any = 'Código Interativo!';
  dados:any = {Nome: "Cristiano", Apelido: "Santos", Idade: 23, Documento: "027788522-12"};

  informacion: any = [ { codigo:1, Nome: "Cristiano", Apelido: "Souza", Saldo: 1500 }, { codigo:1, Nome: "Jose", Apelido: "Amaral", Saldo: 1000 }, { codigo:1, Nome: "Luiz", Apelido: "Santos", Saldo: 500 }];

  eventoBotao() {
    console.log('Execução do evento indicado o controle');
  }
}
