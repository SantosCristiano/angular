import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'concatenarCurso'
})
export class FormatoNomePipe implements PipeTransform {

  transform(parametro1: string, parametro2:string): any {
    //return null;
    return "[" + parametro1 + " -- " + parametro2;
  }

}
