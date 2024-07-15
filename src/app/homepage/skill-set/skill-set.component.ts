import { Component } from '@angular/core';
import { Skills } from '../../interfaces/skills';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-skill-set',
  standalone: true,
  imports: [
    TranslateModule
  ],
  templateUrl: './skill-set.component.html',
  styleUrl: './skill-set.component.scss',
})
export class SkillSetComponent {
  skills: Skills[] = [
    {
      img: 0,
      skill: 'Angular',
    },
    {
      img: 1,
      skill: 'TypeScript',
    },
    {
      img: 2,
      skill: 'JavaScript'
    },
    {
      img: 3,
      skill: 'HTML'
    },
    {
      img: 4,
      skill: 'Scrum'
    },
    {
      img: 5,
      skill: 'Firebase'
    },
    {
      img: 6,
      skill: 'GIT'
    },
    {
      img: 7,
      skill: 'CSS'
    },
    {
      img: 8,
      skill: 'Rest-Api'
    },
    {
      img: 9,
      skill: 'Material Design'
    }
  ];
}
