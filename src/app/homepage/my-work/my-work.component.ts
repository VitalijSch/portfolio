import { Component } from '@angular/core';
import { MyWorks } from '../../interfaces/my-works';
import { ProjectComponent } from './project/project.component';

@Component({
  selector: 'app-my-work',
  standalone: true,
  imports: [
    ProjectComponent
  ],
  templateUrl: './my-work.component.html',
  styleUrl: './my-work.component.scss'
})
export class MyWorkComponent {
  myWorks: MyWorks[] = [
    {
      img: 0,
      title: 'Join',
      languages: 'HTML | CSS | JavaScript',
      description: $localize`Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.`,
      url: 'https://join.vitalij-schwab.com',
    },
    {
      img: 1,
      title: 'El Pollo Loco',
      languages: 'HTML | CSS | JavaScript',
      description: $localize`Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.`,
      url: 'https://el-pollo-loco.vitalij-schwab.com',
    },
    {
      img: 2,
      title: 'Pokedex',
      languages: 'HTML | CSS | JavaScript | Api',
      description: $localize`Based on the PokéAPI a simple library that provides and catalogues pokemon information.`,
      url: 'https://pokedex.vitalij-schwab.com',
    }
  ];
}