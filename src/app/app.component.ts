import { Component, OnInit } from '@angular/core';
import { HeroesComponent } from './heroes/heroes.component';

@Component({
  standalone: true,
  selector: 'app-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports:[HeroesComponent],
})
export class AppComponent implements OnInit {
  // username : string= "john wick";
  // phone : string= "8157853929";
  // age : number= 80;
  // avatar : string="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ1Csi_wqxcEFcoVmZq3D0iiTi8jeEkcvAdo17e6iL&s"

  title = 'Tour of Heroes';
  

  constructor() { }

  ngOnInit() {
  }

}