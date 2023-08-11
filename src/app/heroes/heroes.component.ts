import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {Hero} from '../hero';
import {HEROES} from '../mok-heroes';
@Component({
  standalone: true,
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  imports:[CommonModule,FormsModule],
})
export class HeroesComponent implements OnInit {
  // hero = 'Ranbir Kapoor';
  hero:Hero={
    id:1,
    name:'Ranbir Kapoor',
}
heroes = HEROES;
  constructor() { }

  ngOnInit() {
  }

}