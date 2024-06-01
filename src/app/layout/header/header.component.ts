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

  public changeLanguage(language: string): void {
    window.location.href = (`https://vitalij-schwab.com/${language}`);
  }

  constructor(private router: Router) { }

  public showHomepage(): void {
    this.router.navigate(['/']);
  }

  public handleMenuBarMobile(): void {
    this.showMenuBar = !this.showMenuBar;
    if (this.showMenuBar) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = '';
    }
  }

  public slideMenuBar(): string {
    if (this.showMenuBar) {
      return 'menu-bar-mobile-container slide-from-right'
    } else {
      return 'menu-bar-mobile-container';
    }
  }
}
