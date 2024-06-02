import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  constructor(private router: Router) { }

  /**
   * Navigates to the imprint page.
   * @returns {void}
   */
  public showImprint(): void {
    this.router.navigate(['/imprint']);
  }

  /**
   * Gets the current year.
   * @returns {number} The current year.
   */
  public currentYear(): number {
    return new Date().getFullYear();
  }
}
