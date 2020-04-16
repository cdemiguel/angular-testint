import { Component, OnInit, Input } from '@angular/core';
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

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onClickGoToHero() {
    this.router.navigate(['/heroe', this.index]);
  }
}
