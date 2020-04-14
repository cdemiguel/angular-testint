import { Component, OnInit } from '@angular/core';

interface Texto {
  autor: string;
  mensaje: string;
}

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
})
export class BodyComponent implements OnInit {
  mostrar = true;

  texto: Texto = {
    autor: 'El autor',
    mensaje: 'El texto'
  };

  items: string[] = ['A', 'B', 'C']

  ngOnInit(): void {
  }

}