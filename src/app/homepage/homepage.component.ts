import { Component } from '@angular/core';
import { AboveTheFoldComponent } from './above-the-fold/above-the-fold.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { SkillSetComponent } from './skill-set/skill-set.component';
import { MyWorkComponent } from './my-work/my-work.component';
import { ContactComponent } from './contact/contact.component';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [
    AboveTheFoldComponent,
    AboutMeComponent,
    SkillSetComponent,
    MyWorkComponent,
    ContactComponent
  ],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {

}
