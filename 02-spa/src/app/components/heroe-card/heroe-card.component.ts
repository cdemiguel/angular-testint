import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Heroe } from '../../../data/heroes.data';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-card',
  templateUrl: './heroe-card.component.html',
  styleUrls: ['./heroe-card.component.scss']
})
export class HeroeCardComponent implements OnInit {

  @Input() heroe: any = {};
  @Input() index: number;

  @Output() selectedHeroe: EventEmitter<number>;

  constructor(private router: Router) {
    this.selectedHeroe = new EventEmitter();
  }

  ngOnInit(): void {
  }

  onClickGoToHero() {
    this.selectedHeroe.emit(this.index);
  }
}
