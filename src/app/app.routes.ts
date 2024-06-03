import { Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { ImprintComponent } from './imprint/imprint.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';

export const routes: Routes = [
    { path: '', component: HomepageComponent },
    { path: 'imprint', component: ImprintComponent },
    { path: 'privacy-policy', component: PrivacyPolicyComponent },
    { path: 'en-US/imprint', component: ImprintComponent },
    { path: 'de-DE/privacy-policy', component: PrivacyPolicyComponent },
    { path: 'de-DE/imprint', component: ImprintComponent },
    { path: 'en-US/privacy-policy', component: PrivacyPolicyComponent },
];