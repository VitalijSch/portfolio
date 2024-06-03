import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ContactData } from '../../interfaces/contact-data';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Post } from '../../interfaces/post';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss', './contact.component.media.scss']
})
export class ContactComponent {
  http: HttpClient = inject(HttpClient);
  buttonName: string = $localize`Say hello ;)`;
  isPrivacyPolicy: string = $localize`privacy policy`;
  currentEndPoint: string = '';

  contactData: ContactData = {
    name: '',
    email: '',
    message: '',
  };

  mailTest: boolean = true;
  isChecked: boolean = false;
  showErrorCheckbox: boolean = false;
  isSubmitted: boolean = false;

  constructor(private router: Router) {
    this.currentUrl();
  }

  /**
   * Represents a POST request configuration for sending contact form data.
   */
  post: Post = {
    endPoint: `${this.currentEndPoint}sendMail.php`,
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  /**
   * Sets the current endpoint based on the URL's language parameter.
   * @returns {void}
   */
  private currentUrl(): void {
    const url = window.location.href;
    if (url.includes('en-US')) {
      this.currentEndPoint = 'https://vitalij-schwab.com/en-US/';
    } else if (url.includes('de-DE')) {
      this.currentEndPoint = 'https://vitalij-schwab.com/de-DE/';
    }
  }

  /**
   * Submits the contact form if valid and not in test mode.
   * @param {NgForm} ngForm - The Angular form to submit.
   * @returns {void}
   */
  public onSubmit(ngForm: NgForm): void {
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      if (this.isChecked) {
        this.submitContactForm(ngForm);
      } else {
        this.showErrorCheckbox = true;
      }
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
      if (this.isChecked) {
        this.resetFormAndCheckboxes(ngForm);
      } else {
        this.showErrorCheckbox = true;
      }
    }
  }

  /**
   * Submits the contact form data via HTTP POST request.
   * @param {NgForm} ngForm - The Angular form containing contact data.
   * @returns {void}
   */
  private submitContactForm(ngForm: NgForm): void {
    this.http.post(this.post.endPoint, this.post.body(this.contactData))
      .subscribe({
        next: (response) => {
          ngForm.resetForm();
        },
        error: (error) => {
          console.error(error);
        },
        complete: () => console.info('send post complete'),
      });
    this.handleCheckbox();
    this.showFeedback();
    this.showErrorCheckbox = false;
  }

  /**
   * Resets the form and checkboxes after successful form submission.
   * @param {NgForm} ngForm - The Angular form to reset.
   * @returns {void}
   */
  private resetFormAndCheckboxes(ngForm: NgForm): void {
    ngForm.resetForm();
    this.handleCheckbox();
    this.showFeedback();
    this.showErrorCheckbox = false;
  }

  /**
   * Displays feedback to the user after form submission.
   * @returns {void}
   */
  private showFeedback(): void {
    this.isSubmitted = true;
    setTimeout(() => {
      this.isSubmitted = false;
    }, 2000);
  }

  /**
   * Toggles the checkbox state.
   * @returns {void}
   */
  public handleCheckbox(): void {
    this.isChecked = !this.isChecked;
    if (this.isChecked) {
      this.showErrorCheckbox = false;
    }
  }

  /**
   * Navigates to the privacy policy page.
   * @returns {void}
   */
  public showPrivacyPolicy(): void {
    this.router.navigate(['/privacy-policy']);
  }
}
