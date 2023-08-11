import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
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
  
@Input() hero!:Hero;
// heroes = HEROES;
  constructor() { }

  ngOnInit() {
  }

}