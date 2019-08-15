import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.less']
})
export class BodyComponent implements OnInit {
  categorias: any = [ { codigo:1, texto: "Politica" },{ codigo:2, texto: "Educação" },{ codigo:3, texto: "Segurança" } ];
  temporal: any;
  noticias: any = [ { categoria: { codigo:1, texto: "Politica" }, titulo: "Titulo da matéria", texto: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", imagem: "http://www.portaldasmissoes.com.br/uploads/noticias/0001005_zoom_sa-catedral-lua-1024.jpg" },
  { categoria: { codigo:2, texto: "Politica" }, titulo: "Titulo da matéria", texto: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", imagem: "http://www.portaldasmissoes.com.br/uploads/noticias/0001005_zoom_sa-catedral-lua-1024.jpg" },
  { categoria: { codigo:3, texto: "Politica" }, titulo: "Titulo da matéria", texto: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", imagem: "http://www.portaldasmissoes.com.br/uploads/noticias/0001005_zoom_sa-catedral-lua-1024.jpg" },
  { categoria: { codigo:4, texto: "Politica" }, titulo: "Titulo da matéria", texto: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", imagem: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." },
  { categoria: { codigo:5, texto: "Politica" }, titulo: "Titulo da matéria", texto: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", imagem: "http://www.portaldasmissoes.com.br/uploads/noticias/0001005_zoom_sa-catedral-lua-1024.jpg" } ] ;

  constructor() {
    this.temporal = this.noticias;
  }

  ngOnInit() {
  }

  eventoControl(evento) {
    if (evento.target.value == 0) {
      this.noticias = this.temporal;
    } else {
      this.noticias = this.noticias.filter( (item) => {
        return item.categoria.codigo == evento.target.value;
      });
    }
  }

}
