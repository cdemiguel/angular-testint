import { Injectable } from '@angular/core';
import { heroesData, Heroe } from '../../data/heroes.data';

@Injectable()
export class HeroesService {

  private _heroesData = heroesData;

  constructor() {
    console.log('Servicio listo para usar');
  }

  public getHeroes(): Heroe[] {
    return this._heroesData;
  }

  public getHeroe(id: number): Heroe {
    return this._heroesData[id];
  }
}

