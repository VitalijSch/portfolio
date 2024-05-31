import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  private showMenuBar: boolean = false;

  public reloadHomepage() {
    window.location.href = '/';
  }

  public handleMenuBarMobile() {
    this.showMenuBar = !this.showMenuBar;
    if (this.showMenuBar) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = '';
    }
  }

  public slideMenuBar() {
    if (this.showMenuBar) {
      return 'menu-bar-mobile-container slide-from-right'
    } else {
      return 'menu-bar-mobile-container';
    }
  }
}
