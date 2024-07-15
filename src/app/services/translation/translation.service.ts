import { inject, Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  private translate: TranslateService = inject(TranslateService);

  public currentLanguage: string = 'de';

  constructor() {
    this.translate.setDefaultLang('de');
  }

  public switchLanguage(language: string): void {
    this.translate.use(language);
    this.currentLanguage = language;
  }
}
