import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';
import { Heroe } from '../../../data/heroes.data';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {
  heroes: Heroe[] = [];

  @Input() heroe: any = {};
  @Input() index: number;

  constructor(private _heroesService: HeroesService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => this.heroes = this._heroesService.searchHeroe(params['text']));
  }

  onClickGoToHero(index: number) {
    this.router.navigate(['/heroe', index]);
  }

}
