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

  public searchHeroe(text: string) {
    let heroesArr: Heroe[] = [];
    text = text.toLowerCase();

    for (let heroe of this._heroesData) {
      let nombre = heroe.nombre.toLowerCase();
      if (nombre.indexOf(text) >= 0) {
        heroesArr.push(heroe);
      }
    }
    return heroesArr;
  }
}

