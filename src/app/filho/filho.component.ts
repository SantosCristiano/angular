import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-filho',
  templateUrl: './filho.component.html',
  styleUrls: ['./filho.component.less']
})
export class FilhoComponent implements OnInit {

  @Input("propriedadefilho") dadofilho: any;

  constructor() { }

  ngOnInit() {
  }

}
