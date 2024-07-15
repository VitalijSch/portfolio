import { Component } from '@angular/core';
import { MyWorks } from '../../interfaces/my-works';
import { ProjectComponent } from './project/project.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-my-work',
  standalone: true,
  imports: [
    ProjectComponent,
    TranslateModule
  ],
  templateUrl: './my-work.component.html',
  styleUrl: './my-work.component.scss'
})
export class MyWorkComponent {

  myWorks: MyWorks[] = [
    {
      img: 0,
      title: 'DA-Bubble (WIP)',
      languages: 'HTML| SCSS | Angular | TypeScript | Firebase ',
      description: 'myWork.daBubble',
      url: '',
    },
    {
      img: 1,
      title: 'Join',
      languages: 'HTML | CSS | JavaScript',
      description: 'myWork.join',
      url: 'https://join.vitalij-schwab.com',
    },
    {
      img: 2,
      title: 'El Pollo Loco',
      languages: 'HTML | CSS | JavaScript',
      description: 'myWork.elPolloLoco',
      url: 'https://el-pollo-loco.vitalij-schwab.com',
    },
    {
      img: 3,
      title: 'Pokedex',
      languages: 'HTML | CSS | JavaScript | Api',
      description: 'myWork.pokedex',
      url: 'https://pokedex.vitalij-schwab.com',
    }
  ];
}