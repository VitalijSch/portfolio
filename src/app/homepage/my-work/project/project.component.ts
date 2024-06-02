import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Input, ViewChildren } from '@angular/core';
import { MyWorks } from '../../../interfaces/my-works';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [CommonModule,],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent implements AfterViewInit {
  @Input() work!: MyWorks;
  @Input() index!: number;

  @ViewChildren('animatedElement') animatedElements!: ElementRef[];

  /**
   * Intersects with the animated elements and adds or removes the 'appear' class based on their visibility.
   * @returns {void}
   */
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

  /**
 * Opens a GitHub repository page in a new tab based on the provided title.
 * @param {string} title - The title of the GitHub repository.
 * @returns {void}
 */
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
