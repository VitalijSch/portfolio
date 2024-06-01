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

  public showImprint(): void {
    this.router.navigate(['/imprint']);
  }

  public currentYear(): number {
    return new Date().getFullYear();
  }
}
