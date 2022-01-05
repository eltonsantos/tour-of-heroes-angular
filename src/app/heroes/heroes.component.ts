import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero.model';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[] = [];
  selectedHero?: Hero;

  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    // this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
    this.heroService.getHeroes().subscribe({
      next(x) {
        console.log('got value: ' + JSON.stringify(x, null, 2));
      },
      error(err) {
        console.log('something wrong occurred: ' + err);
      },
      complete() {
        console.log('done');
      },
    });
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

}
