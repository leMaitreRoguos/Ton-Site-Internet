import { Component, OnInit } from '@angular/core';
import { Menu } from '../modeles/menu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menus!: Menu[];
  menuelt2!: string;
  menuelt3!: string;

  constructor() { }

  ngOnInit(): void {

    this.menus = [
      {menuTheme: 'Accueil',},
      {menuTheme: 'Outils'},
      {menuTheme: 'Prestations'}
    ];
    this.menuelt2 = 'Expertise';
    this.menuelt3 = 'Contact';

  }

}
