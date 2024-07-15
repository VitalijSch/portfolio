import { Component, inject } from '@angular/core';
import { TranslationService } from '../services/translation/translation.service';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss'
})
export class PrivacyPolicyComponent {
  public translationService: TranslationService = inject(TranslationService);

  constructor() {
    window.scrollTo(0, 0);
  }
}
