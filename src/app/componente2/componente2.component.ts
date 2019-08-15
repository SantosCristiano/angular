import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-componente2',
  templateUrl: './componente2.component.html',
  styleUrls: ['./componente2.component.less']
})
export class Componente2Component implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) {

   }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params["id"] != null) {
        console.log('Legou con el parametro id ' + params["id"]);
      }
    });
  }

}
