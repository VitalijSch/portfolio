import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  private showMenuBar: boolean = false;

  constructor(private router: Router) { }

  /**
   * Changes the language of the website.
   * @param {string} language - The language code to switch to.
   * @returns {void}
   */
  public changeLanguage(language: string): void {
    window.location.href = (`https://vitalij-schwab.com/${language}`);
  }

  /**
   * Navigates to the homepage.
   * @returns {void}
   */
  public showHomepage(): void {
    this.router.navigate(['/']);
  }

  /**
   * Toggles the visibility of the mobile menu bar and handles overflow.
   * @returns {void}
   */
  public handleMenuBarMobile(): void {
    this.showMenuBar = !this.showMenuBar;
    if (this.showMenuBar) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = '';
    }
  }

  /**
   * Returns the CSS class for the mobile menu bar animation.
   * @returns {string} The CSS class for the mobile menu bar.
   */
  public slideMenuBar(): string {
    if (this.showMenuBar) {
      return 'menu-bar-mobile-container slide-from-right'
    } else {
      return 'menu-bar-mobile-container';
    }
  }
}
