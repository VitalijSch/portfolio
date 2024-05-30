import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MyWorks } from '../interfaces/my-works';

@Component({
  selector: 'app-my-work',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-work.component.html',
  styleUrl: './my-work.component.scss'
})
export class MyWorkComponent {
  myWorks: MyWorks[] = [
    {
      img: 0,
      title: 'Join',
      languages: 'HTML | CSS | JavaScript',
      description: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.'
    },
    {
      img: 1,
      title: 'El Pollo Loco',
      languages: 'HTML | CSS | JavaScript',
      description: 'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.'
    },
    {
      img: 2,
      title: 'Pokedex',
      languages: 'HTML | CSS | JavaScript | Api',
      description: 'Based on the PokéAPI a simple library that provides and catalogues pokemon information.'
    }
  ];

  public goToPage(title: string) {
    if (title === 'Join') {
      window.open('https://github.com/VitalijSch/join', '_blank');
    } else if (title === 'El Pollo Loco') {
      window.open('https://github.com/VitalijSch/El-Pollo-Loco', '_blank');
    } else if (title === 'Pokedex') {
      window.open('https://github.com/VitalijSch/Pokedex', '_blank');
    }
  }
}
