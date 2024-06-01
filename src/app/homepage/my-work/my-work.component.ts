import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, ViewChildren } from '@angular/core';
import { MyWorks } from '../../interfaces/my-works';

@Component({
  selector: 'app-my-work',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-work.component.html',
  styleUrls: ['./my-work.component.scss', './my-work.component.media.scss']
})
export class MyWorkComponent implements AfterViewInit {
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

  @ViewChildren('animatedElement') animatedElements!: ElementRef[];

  ngAfterViewInit(): void {
    const options = {
      threshold: 0.5,
    };

    const callback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('appear');
        } else {
          entry.target.classList.remove('appear');
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);
    this.animatedElements.forEach((animatedElement) => {
      observer.observe(animatedElement.nativeElement);
    });
  }

  public goToPage(title: string): void {
    if (title === 'Join') {
      window.open('https://github.com/VitalijSch/join', '_blank');
    } else if (title === 'El Pollo Loco') {
      window.open('https://github.com/VitalijSch/El-Pollo-Loco', '_blank');
    } else if (title === 'Pokedex') {
      window.open('https://github.com/VitalijSch/Pokedex', '_blank');
    }
  }
}