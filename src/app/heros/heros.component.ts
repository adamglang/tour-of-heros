import { Component, OnInit } from '@angular/core';
import { HEROES } from '../mock-heros';
import { Hero } from '../hero';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})

export class HerosComponent implements OnInit {

  constructor() { }

  heroes = HEROES;

  hero: Hero = {
      'id': 1,
      'name': 'Thor'
  };

  ngOnInit() {}
}
