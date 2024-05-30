import { keyframes, style, animate } from '@angular/animations';

export const growAnimation = animate('1s', keyframes([
    style({ opacity: 0, offset: 0 }), // Startpunkt
    style({ opacity: 1, offset: 1 })   // Endpunkt
]));