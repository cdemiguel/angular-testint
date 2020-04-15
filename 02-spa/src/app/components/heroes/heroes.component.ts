import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Heroe } from '../../../data/heroes.data';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  heroes: Heroe[] = [];

  // OLD
  // _heroesService: HeroesService;

  // constructor(heroesService: HeroesService) {
  //   this._heroesService = heroesService;
  // }

  // Refactor
  constructor(private _heroesService: HeroesService) { }

  ngOnInit(): void {
    this.heroes = this._heroesService.getHeroes();
    console.log(this.heroes);
  }

}
